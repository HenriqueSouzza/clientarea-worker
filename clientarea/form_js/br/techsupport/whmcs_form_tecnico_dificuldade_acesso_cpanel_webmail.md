---
subject: Suporte Técnico - Dificuldade de Acesso ao cPanel ou Webmail
showWhen:
  - method: isInGroup
    vars: [CRIADOR_SITES_ALL,SHARED_ALL,PLUS_ALL,VPS_ALL,DEDICATED_ALL]
tags:
  - whmcs_form_tecnico_dificuldade_acesso_cpanel_webmail
root:
  name: techsupport
  as: Dificuldade de Acesso ao cPanel ou Webmail
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