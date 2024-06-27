---
subject: Suporte Técnico - Certificado SSL Wildcard
showWhen:
  - method: isInGroup
    vars: [RESELLER_ALL,VPS_ALL,DEDICATED_ALL]
tags:
  - whmcs_form_tecnico_certificado_ssl_wildcard
root:
  name: techsupport
  as: Certificado SSL Wildcard
fields:
  - label: URLs para instalação do SSL (uma em cada linha)
    type: textarea
    info: Informe o domínio e os subdomínios que deseja solicitar o certificado SSL
    rows: 5
  - label: Ciclo de pagamento para o SSL Empresarial
    type: select
    options:
      - name: Plano anual – R$ 415,99
        value: 1
      - name: Plano bienal – R$ 755,99
        value: 2
      - name: Plano trienal – R$ 1.045,00
        value: 3
  - label: Sim, concordo com a cobrança do serviço informado no campo de seleção acima
    type: checkbox
---

Para que o SSL solicitado seja gerado, será adicionada uma conta de e-mail "hostmaster@dominio". Em alguns casos, a criação desta conta será solicitada. Caso tenha alguma dúvida, entre em contato com nossa equipe através dos nossos Canais de Atendimento

Este certificado não dá direito ao Selo de Identidade Empresarial. Caso precise de um certificado SSL com esta característica, por favor, preencha a solicitação de **SSL com Certificação de Identidade Empresarial**.


  - No campo URL para instalação do SSL, cuide para informar o domínio correto, já que não é possível reemitir o certificado para outro domínio.
  - O SSL funcionará apenas no domínio informado abaixo (nomedodominio.com.br, por exemplo) e seus respectivos subdomínios (loja.nomedodominio.com.br, por exemplo).
  - O certificado SSL é válido apenas para instalação nos servidores da Hostgartor.
  - O certificado não é válido para planos "Criador de sites Weebly" e/ou sites criados na ferramenta Weebly.
  - Para planos Revenda, utilize este formulário para solicitação de certificado SSL apenas para os seus clientes.