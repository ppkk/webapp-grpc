package web

import (
	"encoding/json"
	"log"
	"net/http"
	"time"
	"github.com/google/uuid"
)

var validCredentials = map[string]string{
	"sparta": "goal",
	"slavia": "nogoal",
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
	expiresAt := time.Now()

	sessions[uuid] = session{
		email: credentials.Email,
		expiresAt: expiresAt,
	}
}

func Run() {
	port := ":8080"
	http.HandleFunc("/login", login)
	log.Printf("web server listening at %v", port)
	log.Fatal(http.ListenAndServe(port, nil))
}
