package web

import (
	"log"
	"net/http"
)

func Run() {
	port := ":8080"
	http.HandleFunc("/login", login)
	log.Printf("web server listening at %v", port)
	log.Fatal(http.ListenAndServe(port, nil))

}

func login(w http.ResponseWriter, r *http.Request) {
}
