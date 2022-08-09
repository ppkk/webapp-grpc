package web

import (
	"encoding/json"
	"log"
	"net/http"
	"time"
	"github.com/google/uuid"
)

var validCredentials = map[string]string{
	"sparta@sparta.cz": "goal",
	"slavia@slavia.cz": "nogoal",
}

var sessions = map[string]session{}

type Credentials struct {
	Email string `json:"email"`
	Password string `json:"password"`
}

type session struct {
	email string
	expiresAt time.Time
}

func (s session) isExpired() bool {
	return s.expiresAt.Before(time.Now())
}

func login(w http.ResponseWriter, r *http.Request) {
	var credentials Credentials
	err := json.NewDecoder(r.Body).Decode(&credentials)
	if err != nil {
		w.WriteHeader(http.StatusBadRequest)
		return
	}
	expectedPassword, ok := validCredentials[credentials.Email];
	if !ok || expectedPassword != credentials.Password {
		w.WriteHeader(http.StatusUnauthorized)
		return
	}

	uuid := uuid.New().String()
	expiresAt := time.Now().Add(time.Duration(3600 * float64(time.Second)))

	sessions[uuid] = session{
		email: credentials.Email,
		expiresAt: expiresAt,
	}

	http.SetCookie(w, &http.Cookie{
		Name: "session_id",
		Value: uuid,
		Expires: expiresAt,
	})
}

func Run() {
	port := ":9090"
	http.HandleFunc("/login", login)
	http.Handle("/", http.FileServer(http.Dir("web")));
	log.Printf("web server listening at %v", port)
	log.Fatal(http.ListenAndServe(port, nil))
}
