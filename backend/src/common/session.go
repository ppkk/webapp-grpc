package common

import (
	"time"
)

var Sessions = map[string]Session{}

type Session struct {
        Email string
        ExpiresAt time.Time
}

func (s Session) isExpired() bool {
        return s.ExpiresAt.Before(time.Now())
}

