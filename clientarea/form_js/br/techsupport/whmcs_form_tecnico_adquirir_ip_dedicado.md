---
subject: Suporte Técnico - Aquisição de IP Dedicado
showWhen:
  - method: isInGroup
    vars: [RESELLER_ALL,DEDICATED_ALL]
  - method: isProduct
    vars: [PLANO_M,PLANO_BUSINESS]
tags:
  - whmcs_form_tecnico_adquirir_ip_dedicado
root:
  name: techsupport
  as: Aquisição de IP Dedicado
fields:
  - label: Quantidade de IPS
    type: text
  - label: Ciclo de Pagamento
    type: select
    options:
      - name: Mensal
        value: Mensal
      - name: Anual
        value: Anual
  - label: Justificativa
    type: textarea
    rows: 5
    optional: true
  - label: Concorda com a cobrança
    type: checkbox
---

  - Só é possível ter um endereço de IP dedicado por conta compartilhada.
  - O endereço IP dedicado será atribuído a todos os domínios do seu cPanel.
  - Seu domínio primário e todos os domínios e subdomínios irão utilizar o mesmo endereço IP.
  - Devido à escassez mundial de endereços IPs (IPv4), o IP dedicado só é comercializado para contas que forem utilizar um certificado SSL, desse modo, por gentileza, informe a necessidade da compra do IP dedicado no campo "Justificativa"