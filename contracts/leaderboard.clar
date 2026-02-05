;; ============================================
;; LEADERBOARD - Hall of Laziness
;; Clarity 2 Smart Contract
;; ============================================

(define-constant ERR_NOT_FOUND (err u404))
(define-constant ERR_INVALID_STREAK (err u400))
(define-constant ERR_LIST_OVERFLOW (err u500))

(define-data-var top-scores (list 10 { user: principal, blocks: uint }) (list))

(define-public (update-my-position)
  (let
    (
      (streak-result (contract-call? .streak-tracker get-streak-blocks tx-sender))
      (current-scores (var-get top-scores))
    )
    ;; Verify streak exists
    (match streak-result
      streak
        (begin
          ;; Filter out existing score for this user
          (let
            (
              (filtered-scores (filter filter-sender current-scores))
            )
            (if (< (len filtered-scores) u10)
              ;; If room, just append
              (match (as-max-len? (append filtered-scores { user: tx-sender, blocks: streak }) u10)
                new-list (ok (var-set top-scores new-list))
                ERR_LIST_OVERFLOW
              )
              ;; If full, remove the first one (FIFO) and append new
              (let
                (
                  (new-list-opt (as-max-len? (append (if (is-eq (len filtered-scores) u10) (cdr filtered-scores) filtered-scores) { user: tx-sender, blocks: streak }) u10))
                )
                (match new-list-opt
                  new-list (ok (var-set top-scores new-list))
                  ERR_LIST_OVERFLOW
                )
              )
            )
          )
        )
      ERR_NOT_FOUND
    )
  )
)

(define-private (filter-sender (entry { user: principal, blocks: uint }))
  (not (is-eq (get user entry) tx-sender))
)

(define-private (cdr (l (list 10 { user: principal, blocks: uint })))
  (default-to (list) (as-max-len? (slice? l u1 (len l)) u10))
)

(define-read-only (get-leaderboard)
  (ok (var-get top-scores))
)
