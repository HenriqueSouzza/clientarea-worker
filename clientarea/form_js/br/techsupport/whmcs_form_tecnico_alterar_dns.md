---
subject: Suporte Técnico - Alteração de DNS
showWhen:
  - method: isInGroup
    vars: [DOMAINS_ALL]
tags:
  - whmcs_form_tecnico_alterar_dns
root:
  name: techsupport
  as: Alteração de DNS
fields:
  - label: Informe as entradas de DNS ou entradas de zona de DNS avançada desejadas
    type: textarea
    rows: 5
---

Exemplo: NS, CNAME, TXT, A, MX, SPF, DKIM