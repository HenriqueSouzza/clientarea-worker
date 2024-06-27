
if (country == 'br') { // Cancelamento
  HgZendeskForms.registerForm((form) => {
    const domains = form.products.filter(prod => HgProducts.DOMAINS_ALL.indexOf(prod.pid) !== -1);

    const services = form.products.filter(serv => HgProducts.SERVICES_ALL.indexOf(serv.pid) !== -1);

    const custom = {
    // hostings: hostings,
      domains,
      services,
    };

    const select = {

    };

    return {
      subject: 'Suporte Técnico - Solicitação de Cancelamento',
      key: 'cancelamentonovo',
      tags: [
        'whmcs_form_tecnico_windows_smartertool',
      ],
      optOrder: 3,
      visible() {
        return true;
      },
      root: {
        name: 'accountsupport',
        as: 'Solicitação de Cancelamento',
      },
      fields: [
        {
          type: 'cancelamento',
          url: 'clientarea.php',
          custom,
          select,
        },
      ],
    };
  });

  HgZendeskForms.registerForm(form => ({
    subject: 'Suporte Financeiro - Alterar Data de Vencimento',
    key: 'changeduedate',
    tags: ['whmcs_form_financeiro_alterar_data_de_vencimento'],
    visible() { return !HgZendeskFormValidation.isInGroup(form.product.pid, [HgProducts.SERVICES_ALL, HgProducts.DOMAINS_ALL]); },
    root: { name: 'salessupport', as: 'Alterar Data de Vencimento' },
    text: [
      '<b>Leia com atenção os termos a seguir:</b>',
      '- A nova data precisa ser <b>de até 30 dias a partir da data de vencimento atual</b> do serviço;',
      '- Alterar a data de vencimento <b>poderá gerar um acréscimo de valor na sua próxima fatura</b> por conta da readequação da data.',
      '<br><br>',
    ].join('\n'),
    fields: [
      { label: 'Qual a data de vencimento desejada?', type: 'date' },
      { label: '✔️ Confirmo que li e concordo com os termos acima.', type: 'checkbox' },
    ],
  }));

  HgZendeskForms.registerForm(form => ({
    subject: 'Suporte Técnico - Smarter Tool',
    key: 'upsmartertool',
    tags: ['whmcs_form_tecnico_windows_smartertool'],
    visible() {
      return !!form.product && HgZendeskFormValidation.isProduct(form.product.pid, [HgProducts.DEDICADO_WINDOWS_BASICO, HgProducts.DEDICADO_WINDOWS_STANDARD, HgProducts.DEDICADO_WINDOWS_ELITE, HgProducts.DEDICADO_WINDOWS_PRO]);
    },
    root: { name: 'techsupport', as: 'Smarter Tool' },
    fields: [
      {
        label: 'Selecione qual ferramenta deseja realizar o upgrade',
        type: 'select',
        name: 'smartertoolproduct',
        options: [
          { name: 'SmarterMail', value: 1 },
          { name: 'SmarterStats', value: 2 },
          { name: 'SmarterTrack', value: 3 },
        ],
      },
      {
        label: 'Selecione a forma de pagamento',
        type: 'select',
        depends: 'smartertoolproduct',
        name: 'smartertoolpagto',
        visible() {
          return !!form.smartertoolproduct && form.smartertoolproduct.value !== 3;
        },
        options: [
          { name: 'Taxa única', value: 1 },
          { name: 'Taxa mensal', value: 2 },
        ],
      },
      {
        label: 'SmarterMail Upgrade',
        type: 'select',
        depends: 'smartertoolpagto',
        name: 'smartermail',
        visible() {
          return !!form.smartertoolpagto && form.smartertoolproduct.value === 1;
        },
        options: [
          {
            name: 'SmarterMail Professional 250 usuários - R$400,00 uma vez',
            value: 1,
            hidden: !!form.smartertoolpagto && form.smartertoolpagto.value !== 1,
          },
          {
            name: 'SmarterMail Professional 1000 usuários - R$800,00 uma vez',
            value: 2,
            hidden: !!form.smartertoolpagto && form.smartertoolpagto.value !== 1,
          },
          {
            name: 'SmarterMail Professional Ilimitado - R$1.600,00 uma vez',
            value: 3,
            hidden: !!form.smartertoolpagto && form.smartertoolpagto.value !== 1,
          },
          {
            name: 'SmarterMail Enterprise 250 usuários - R$400,00 uma vez',
            value: 4,
            hidden: !!form.smartertoolpagto && form.smartertoolpagto.value !== 1,
          },
          {
            name: 'SmarterMail Enterprise 1000 usuários - R$1.200,00 uma vez',
            value: 5,
            hidden: !!form.smartertoolpagto && form.smartertoolpagto.value !== 1,
          },
          {
            name: 'SmarterMail Enterprise Ilimitado  - R$2.000,00 uma vez',
            value: 6,
            hidden: !!form.smartertoolpagto && form.smartertoolpagto.value !== 1,
          },

          {
            name: 'SmarterMail Professional 250 usuários - R$30,00 mensal',
            value: 7,
            hidden: !!form.smartertoolpagto && form.smartertoolpagto.value !== 2,
          },
          {
            name: 'SmarterMail Professional 1000 usuários - R$80,00 mensal',
            value: 8,
            hidden: !!form.smartertoolpagto && form.smartertoolpagto.value !== 2,
          },
          {
            name: 'SmarterMail Professional Ilimitado - R$120,00 mensal',
            value: 9,
            hidden: !!form.smartertoolpagto && form.smartertoolpagto.value !== 2,
          },
          {
            name: 'SmarterMail Enterprise 250 usuários - R$80,00 mensal',
            value: 10,
            hidden: !!form.smartertoolpagto && form.smartertoolpagto.value !== 2,
          },
          {
            name: 'SmarterMail Enterprise 1000 usuários - R$120,00 mensal',
            value: 11,
            hidden: !!form.smartertoolpagto && form.smartertoolpagto.value !== 2,
          },
          {
            name: 'SmarterMail Enterprise Ilimitado  - R$200,00 mensal',
            value: 12,
            hidden: !!form.smartertoolpagto && form.smartertoolpagto.value !== 2,
          },
        ],
      },
      {
        label: 'SmarterStats Upgrade',
        type: 'select',
        depends: 'smartertoolpagto',
        name: 'smarterstats',
        visible() {
          return !!form.smartertoolpagto && form.smartertoolproduct.value === 2;
        },
        options: [
          {
            name: 'SmarterStats Professional 50 sites - R$400,00 uma vez',
            value: 1,
            hidden: !!form.smartertoolpagto && form.smartertoolpagto.value !== 1,
          },
          {
            name: 'SmarterStats Professional 250 sites - R$800,00 uma vez',
            value: 2,
            hidden: !!form.smartertoolpagto && form.smartertoolpagto.value !== 1,
          },
          {
            name: 'SmarterStats Professional 1000 sites - R$1.200,00 uma vez',
            value: 3,
            hidden: !!form.smartertoolpagto && form.smartertoolpagto.value !== 1,
          },
          {
            name: 'SmarterStats Enterprise 50 sites - R$400,00 uma vez',
            value: 4,
            hidden: !!form.smartertoolpagto && form.smartertoolpagto.value !== 1,
          },
          {
            name: 'SmarterStats Enterprise 250 sites - R$1.400,00 uma vez',
            value: 5,
            hidden: !!form.smartertoolpagto && form.smartertoolpagto.value !== 1,
          },
          {
            name: 'SmarterStats Enterprise 1000 sites  - R$2.400,00 uma vez',
            value: 6,
            hidden: !!form.smartertoolpagto && form.smartertoolpagto.value !== 1,
          },

          {
            name: 'SmarterStats Professional 50 sites - R$30,00 mensal',
            value: 7,
            hidden: !!form.smartertoolpagto && form.smartertoolpagto.value !== 2,
          },
          {
            name: 'SmarterStats Professional 250 sites - R$80,00 mensal',
            value: 8,
            hidden: !!form.smartertoolpagto && form.smartertoolpagto.value !== 2,
          },
          {
            name: 'SmarterStats Professional 1000 sites - R$150,00 mensal',
            value: 9,
            hidden: !!form.smartertoolpagto && form.smartertoolpagto.value !== 2,
          },
          {
            name: 'SmarterStats Enterprise 50 sites  - R$80,00 mensal',
            value: 10,
            hidden: !!form.smartertoolpagto && form.smartertoolpagto.value !== 2,
          },
          {
            name: 'SmarterStats Enterprise 250 sites - R$160,00 mensal',
            value: 11,
            hidden: !!form.smartertoolpagto && form.smartertoolpagto.value !== 2,
          },
          {
            name: 'SmarterStats Enterprise 1000 sites - R$250,00 mensal',
            value: 12,
            hidden: !!form.smartertoolpagto && form.smartertoolpagto.value !== 2,
          },
        ],
      },
      {
        label: 'SmarterTrack Upgrade',
        type: 'select',
        depends: 'smartertoolproduct',
        name: 'smartertrack',
        visible() {
          return !!form.smartertoolproduct && form.smartertoolproduct.value === 3;
        },
        options: [
          {
            name: 'SmarterTrack Professional 2 agentes - R$400,00 uma vez',
            value: 1,
          },
          {
            name: 'SmarterTrack Professional 5 agentes - R$800,00 uma vez',
            value: 2,
          },
          {
            name: 'SmarterTrack Professional 10 agentes - R$1.000,00 uma vez',
            value: 3,
          },
          {
            name: 'SmarterTrack Enterprise 5 agentes - R$800,00 uma vez',
            value: 4,
          },
          {
            name: 'SmarterTrack Enterprise 10 agentes - R$1.600,00 uma vez',
            value: 5,
          },
        ],
      },
      {
        label: 'Chave de licença atual',
        info: 'xxxxxx-xxxxxx-xxxxxx-xxxxxx-xxxxxx-xxxxxx',
        type: 'text',
        visible() {
          return !!form.smartermail || !!form.smartertrack || !!form.smarterstats;
        },
      },
      {
        label: 'Email registrado no Smartertools.com',
        type: 'text',
        visible() {
          return !!form.smartermail || !!form.smartertrack || !!form.smarterstats;
        },
      },
      {
        label: 'Senha no Smartertools.com',
        type: 'text',
        visible() {
          return !!form.smartermail || !!form.smartertrack || !!form.smarterstats;
        },
      },
    ],
  }));

  HgZendeskForms.registerForm(form => ({
    subject: 'Suporte Técnico - Solicitação de Reload/Rebuild',
    key: 'reloadrebuild',
    tags: ['whmcs_form_tecnico_reload-rebuild'],
    visible() {
      return !!form.product
      && (
        HgZendeskFormValidation.isInGroup(form.product.pid,
          [
            HgProducts.VPS_ALL,
            HgProducts.DEDICATED_ALL,
          ])
      );
    },
    root: { name: 'techsupport', as: 'Solicitação de Reload/Rebuild' },
    text: [
      '<b>Leia com atenção os termos a seguir:</b>',
      '<p>',
      '<b>- Nós não faremos backup de seu servidor.</b>',
      '<b>- Caso você deseje que restauremos seu backup, após o procedimento, deverá subir todos os arquivos para um mesmo diretório em até 48 horas.</b>',
      '<b>- Não nos responsabilizamos pelo conteúdo restaurado, pois não temos controle sobre o backup disponibilizado.</b>',
      '</p>',
      '<b>IMPORTANTE:</b>',
      '<p>',
      '<b>Este formulário é para solicitação de Reload/Rebuild. Ao solicitar o procedimento todo o conteúdo do servidor será removido sem possibilidade de restauração.</b>',
      '</p>',
    ].join('<br/>'),
    fields: [
      {
        text: [
          '<p>',
          '<b>ATENÇÃO:</b><br/>',
          '<b>- O procedimento será realizado no servidor selecionado. Não haverá dupla confirmação</b>',
          '<b>- Ao escolher uma imagem linux sem cPanel, o servidor é entregue somente com o SSH configurado. Todas configurações adicionais é responsábilidade do cliente.</b>',
          '<b>- Se o seu servidor contratado é Windows, você somente pode escolher uma imagem Windows, assim como se seu servidor contratado for Linux, somente pode escolher uma imagem Linux. Para trocar o Sistema Operacional nesses casos, deve realizar o cancelamento e uma nova contratação.</b>',
          '</p><br/>',
        ].join('<br/>'),
        optional: true,
      },
      {
        label: 'Qual a imagem desejada?',
        type: 'select',
        name: 'selectImage',
        options: [
          {
            group: true,
            groupLabel: 'Imagens Linux com cPanel',
            options: [
              { name: 'CentOS 7 cPanel', value: 'CentOS 7 cPanel', groupLabel: 'TESTE' },
            ],
          },
          {
            group: true,
            groupLabel: 'Imagens Linux sem cPanel',
            options: [
              { name: 'CentOS 8', value: 'CentOS 8' },
              { name: 'CentOS 7', value: 'CentOS 7' },
              { name: 'Debian 10', value: 'Debian 10' },
              { name: 'Debian 9', value: 'Debian 9' },
              { name: 'Ubuntu 20.04', value: 'Ubuntu 20.04' },
              { name: 'Ubuntu 18.04', value: 'Ubuntu 18.04' },
            ],
          },
          {
            group: true,
            groupLabel: 'Imagens Windows com Plesk (não incluso a licença que deve ser contratada diretamente com eles)',
            options: [
              { name: 'CentOS 8 com Plesk', value: 'CentOS 8 com Plesk' },
              { name: 'CentOS 7 com Plesk', value: 'CentOS 7 com Plesk' },
              { name: 'Debian 10 com Plesk', value: 'Debian 10 com Plesk' },
              { name: 'Debian 9 com Plesk', value: 'Debian 9 com Plesk' },
              { name: 'Ubuntu 20.04 com Plesk', value: 'Ubuntu 20.04 com Plesk' },
              { name: 'Ubuntu 18.04 com Plesk', value: 'Ubuntu 18.04 com Plesk' },
            ],
          },
          {
            group: true,
            groupLabel: 'Imagens Windows com Plesk (incluso a licença)',
            options: [
              { name: 'Windows Server 2016', value: 'Windows Server 2016' },
              { name: 'Windows Server 2019', value: 'Windows Server 2019' },
            ],
          },
        ],
      },
      {
        label: 'Podemos executar em horário comercial',
        type: 'select',
        name: 'selectTime',
        options: [
          { name: 'Sim', value: 'Sim' },
          { name: 'Não', value: 'Não' },
        ],
      },
      { label: '✔️ 08:00 as 18:00 *Conforme horário de Brasília', type: 'checkbox' },
      { label: '✔️ Confirmo que li e concordo com os Termos de Rebuild/Reload', type: 'checkbox' },
      { label: '✔️ Confirmo que li e concordo com os termos acima e com a cobrança do valor de R$250,00 caso se encaixe nos cenários descritos nos termos', type: 'checkbox' },
      { label: '✔️ Confirmo que li e estou ciente que é minha responsabilidade fazer backups para posterior restauração', type: 'checkbox' },
    ],
  }));
}
