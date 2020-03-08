((nil .
      ((eval .
             (progn
               (require 'f)
               (require 's)
               (let ((maybe-env-path (concat (projectile-project-root) ".env")))
                 (when (s-present? (concat (projectile-project-root) ".env"))
                   (let (
                         (pairs (mapcar #'(lambda (it) (s-split "=" it))
                                        (seq-filter #'s-present? (s-lines (f-read (concat (projectile-project-root) ".env"))))))
                         )
                     (dolist (pair pairs)
                       (setenv
                        (car pair)
                        (car (cdr pair))))))))))))
