---
subject: Suporte Técnico - Relatar Problema
showWhen:
  - method: isInGroup
    vars: [CRIADOR_SITES_ALL,WPHOSTING_ALL,STREAMING_ALL,CODEGUARD_ALL]
  - method: isProduct
    vars: 
      - SITELOCK_BASIC
      - SITELOCK_PROFESSIONAL
      - SITELOCK_PREMIUM
      - SITELOCK_ENTERPRISE
      - SSL_FREE
      - SSL_PRIVADO
      - SSL_EMPRESARIAL
      - SSL_WILDCARD
      - CERTIFICADO_SSL_WILDCARD
      - CERTIFICADO_SSL
      - CERTIFICADO_SSL_IP
      - CERTIFICADO_SSL_EMPRESARIAL
tags:
  - whmcs_form_tecnico_relatar_problema
root:
  name: techsupport
  as: Relatar Problema
fields:
  - label: Informe qual erro apresentado
    type: textarea
  - label: Informe o passo a passo de como podemos chegar até o erro encontrado
    type: textarea
    rows: 5
  - label: Comentário geral
    type: textarea
    rows: 5
    optional: true
  - label: Possui print? Nos Envie!
    type: file
    optional: true
---