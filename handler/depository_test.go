package handler

import (
	"github.com/go-playground/assert/v2"
	"testing"
)

func TestTxHash(t *testing.T) {
	depositoryValue := &DepositoryValue{
		From:   "77777798c7577dc7629e48dd0590cc48be0314b4",
		Nonce:  "15",
		TxHash: "0xe7d3c704a7b4fb275070551e953bab24ae3abcbab8a49086d56818fc38b39c48",
	}
	assert.Equal(t, depositoryValue.isLegal(), true)
}
