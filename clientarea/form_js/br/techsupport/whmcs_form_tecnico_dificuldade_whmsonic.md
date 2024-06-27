---
subject: Suporte Técnico - Dificuldade de Acesso ao WHMSonic
showWhen:
  - method: isInGroup
    vars: [STREAMING_ALL]
tags:
  - whmcs_form_tecnico_dificuldade_whmsonic
root:
  name: techsupport
  as: Dificuldade de Acesso ao WHMSonic
fields:
  - label: Informe a URL utilizada para o acesso
    type: text
  - label: Possui print? Nos Envie!
    type: file
    optional: true
  - label: Resulta em erro? Qual? (Comentário Geral)
    type: textarea
    rows: 5
    optional: true
---