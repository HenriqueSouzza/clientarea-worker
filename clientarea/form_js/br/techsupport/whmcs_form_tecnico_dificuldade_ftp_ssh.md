---
subject: Suporte Técnico - Dificuldade de Acesso ao FTP/SSH
showWhen:
  - method: isInGroup
    vars: [STREAMING_ALL,SHARED_ALL,PLUS_ALL,VPS_ALL,DEDICATED_ALL]
tags:
  - whmcs_form_tecnico_dificuldade_ftp_ssh
root:
  name: techsupport
  as: Dificuldade de Acesso ao FTP/SSH
fields:
  - label: Qual nome de Host utilizado para o acesso?
    type: text
    placeholder: hostdoteusite.com.br
  - label: Qual porta utilizada para o acesso?
    type: text
  - label: Resulta em erro? Qual? (Comentário Geral)
    type: textarea
    rows: 5
    optional: true
  - label: Possui print do erro? Nos Envie!
    type: file
    optional: true
---