import { ETicketStatus, type TicketStatusValue } from "@/enums/ticket-status";
import { ETicketType, type TicketTypeValue } from "@/enums/ticket-type";


export interface ReplyTicket {
    id: string,
    username: string,
    userInitials: string,
    userImageUrl: string,
    isCompanyResponse: boolean,
    replyMessage: string,
    createdAt: Date
}

export interface Ticket{
    ticketId: string,
    status: TicketStatusValue,
    ticketType: TicketTypeValue,
    userImageUrl: string,
    username: string,
    userInitials: string
    title: string
    description: string
    createdAt: Date,
    replies?: ReplyTicket[]
}

export const TICKETS_DATA: Ticket[] = [
  {
    ticketId: "2025-CX101",
    status: ETicketStatus.NEW_TICKET,
    ticketType: ETicketType.ACCESS,
    userImageUrl: "https://randomuser.me/api/portraits/men/34.jpg",
    username: "Carlos Mota",
    userInitials: "CM",
    title: "Não consigo fazer login na conta",
    description:
      `Boa tarde,\n\n` +
      `Estou tentando acessar minha conta desde ontem às 18h, mas toda vez que insiro meus dados recebo a mensagem de erro "Credenciais inválidas". Já redefini a senha ontem mesmo através do link de recuperação enviado por e-mail, mas continua dando o mesmo erro.\n` +
      `Tentei em diferentes navegadores (Chrome, Firefox e Edge) e até limpei cache/cookies, mas nada resolveu. Também testei em outro computador e o problema persiste.\n` +
      `Poderiam verificar se há algum bloqueio na minha conta ou um bug no sistema de autenticação? Preciso acessar com urgência para confirmar um pagamento.\n\n` +
      `Obrigado,\nCarlos Mota.`,
    createdAt: new Date(2025, 11, 5, 9, 15),
    replies: [
      {
        id: "5d1fvs56d1v65v1",
        username: "José Oliveira",
        userInitials: "JO",
        userImageUrl:
          "https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg",
        isCompanyResponse: false,
        replyMessage: "Boa noite, eu também estive o mesmo problema...",
        createdAt: new Date(2025, 11, 5, 9, 15),
      },
      {
        id: "dthdtbytb8",
        username: "Sofhia Batista",
        userInitials: "SB",
        userImageUrl:
          "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg",
        isCompanyResponse: false,
        replyMessage:
          "Oii! Eu conseguir acessar minha conta normalmente. Estou usando o navegador Safari.",
        createdAt: new Date(2025, 11, 5, 9, 15),
      },
      {
        id: "dthdtbytb8ccdc",
        username: "Sofhia Batista",
        userInitials: "SB",
        userImageUrl:
          "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg",
        isCompanyResponse: false,
        replyMessage:
          "Oii! Eu conseguir acessar minha conta normalmente. Estou usando o navegador Safari.",
        createdAt: new Date(2025, 11, 5, 9, 15),
      },
      
    ],
  },
  {
    ticketId: "2025-CX102",
    status: ETicketStatus.IN_PROGRESSTICKET,
    ticketType: ETicketType.BUG,
    userImageUrl: "https://randomuser.me/api/portraits/women/45.jpg",
    username: "Ana Beatriz",
    userInitials: "AB",
    title: "Erro ao gerar boleto de pagamento",
    description:
      `Olá,\n\n` +
      `Quando tento gerar um boleto para pagamento da minha fatura, o sistema travou e permaneceu carregando por mais de 2 minutos. Após isso, apareceu uma mensagem genérica de falha e o boleto não foi gerado.\n` +
      `Já tentei realizar a ação em dois navegadores distintos (Chrome e Safari), em modo incógnito, e mesmo assim o erro continua acontecendo.\n` +
      `Preciso desse boleto para efetuar o pagamento até o prazo de vencimento, caso contrário corro risco de suspensão da conta. Poderiam verificar se há algum problema no módulo de geração de boletos?\n\n` +
      `Aguardo retorno,\nAna B.`,
    createdAt: new Date(2025, 11, 4, 14, 30),
    replies: [
      {
        id: "123",
        username: "Abraão Sones",
        userInitials: "AS",
        userImageUrl:
          "https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg",
        isCompanyResponse: false,
        replyMessage: "Boa noite, eu também estive o mesmo problema...",
        createdAt: new Date(2025, 11, 5, 9, 15),
      },
      {
        id: "dsa56v1651fh",
        username: "Mônica Paiva",
        userInitials: "MP",
        userImageUrl:
          "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg",
        isCompanyResponse: false,
        replyMessage:
          "Oii! Eu conseguir acessar minha conta normalmente. Estou usando o navegador Safari.",
        createdAt: new Date(2025, 11, 5, 9, 15),
      },
    ],
  },
  {
    ticketId: "2025-CX103",
    status: ETicketStatus.RESOLVEDTICKET,
    ticketType: ETicketType.FEATURE_REQUEST,
    userImageUrl: "https://randomuser.me/api/portraits/men/58.jpg",
    username: "Pedro Costa",
    userInitials: "PC",
    title: "Solicitação de cancelamento de assinatura",
    description:
      `Olá time,\n\n` +
      `Gostaria de solicitar o cancelamento da minha assinatura. Tomei essa decisão porque não estou utilizando os recursos suficientes deste mês e preferiria reavaliar o plano mais adiante.\n` +
      `Peço que confirmem o estorno do valor cobrado hoje, ou ao menos o cancelamento sem cobrança futura, conforme política que consultei nos termos.\n` +
      `Caso precise de mais informações (documentos, login, dados de pagamento), fico à disposição.\n\n` +
      `Atenciosamente,\nPedro C.`,
    createdAt: new Date(2025, 11, 3, 11, 0),
    replies: [
      {
        id: "zdirjgnpisonjhipr6np5675",
        username: "Abraão Sones",
        userInitials: "AS",
        userImageUrl:
          "https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg",
        isCompanyResponse: false,
        replyMessage: "Boa noite, eu também estive o mesmo problema...",
        createdAt: new Date(2025, 11, 5, 9, 15),
      },
      {
        id: "sfgh4f54hd654yjyt",
        username: "Mônica Paiva",
        userInitials: "MP",
        userImageUrl:
          "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg",
        isCompanyResponse: false,
        replyMessage:
          "Oii! Eu conseguir acessar minha conta normalmente. Estou usando o navegador Safari.",
        createdAt: new Date(2025, 11, 5, 9, 15),
      },
    ],
  },
  {
    ticketId: "2025-CX104",
    status: ETicketStatus.IN_PROGRESSTICKET,
    ticketType: ETicketType.ACCESS,
    userImageUrl: "https://randomuser.me/api/portraits/women/22.jpg",
    username: "Juliana Silva",
    userInitials: "JS",
    title: "Dúvida sobre planos disponíveis",
    description:
      `Oi,\n\n` +
      `Estou avaliando contratar o plano Premium, mas gostaria de entender melhor as diferenças em relação ao plano Básico. Especificamente:\n` +
      ` - Quais recursos adicionais o Premium oferece?\n` +
      ` - Há limite de uso mensal em ambos? Se sim, quais são os limites?\n` +
      ` - O valor é cobrado automaticamente via boleto ou cartão? Há desconto para pagamentos anuais?\n\n` +
      `Se possível, poderiam enviar uma tabela comparativa ou explicar em detalhes para que eu possa decidir com clareza.\n\n` +
      `Obrigada,\nJuliana S.`,
    createdAt: new Date(2025, 10, 30, 16, 45),
  },
  {
    ticketId: "2025-CX105",
    status: ETicketStatus.NEW_TICKET,
    ticketType: ETicketType.FEATURE_REQUEST,
    userImageUrl: "https://randomuser.me/api/portraits/men/15.jpg",
    username: "Ricardo Alves",
    userInitials: "RA",
    title: "Pagamento não aparece no histórico",
    description:
      `Boa noite,\n\n` +
      `Realizei um pagamento ontem no valor de R$ 149,90 via boleto bancário e recebi a confirmação no meu bank app. Porém, ao entrar na minha conta no sistema, o status da fatura continua como “pendente”, e o histórico não mostra a transação.\n` +
      `Esperei cerca de 24h para ver se atualizava, mas nada mudou. Preciso dessa liberação para continuar usando os serviços contratados.\n` +
      `Poderiam verificar se o pagamento foi realmente compensado ou se existe algum erro de sincronização na base de dados?\n\n` +
      `Grato,\nRicardo A.`,
    createdAt: new Date(2025, 11, 5, 10, 5),
    replies: [
      {
        id: "zdfngldknglkng123",
        username: "Abraão Sones",
        userInitials: "AS",
        userImageUrl:
          "https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg",
        isCompanyResponse: false,
        replyMessage: "Boa noite, eu também estive o mesmo problema...",
        createdAt: new Date(2025, 11, 5, 9, 15),
      },
    ],
  },
  {
    ticketId: "2025-CX106",
    status: ETicketStatus.RESOLVEDTICKET,
    ticketType: ETicketType.SUPORT_TECHNICAL,
    userImageUrl: "https://randomuser.me/api/portraits/women/36.jpg",
    username: "Mariana Rocha",
    userInitials: "MR",
    title: "Problema ao redefinir senha",
    description:
      `Olá,\n\n` +
      `Solicitei a recuperação de senha no dia 27/11 e recebi o e-mail com o link para redefinição. Ao clicar, fui direcionada para uma página que informou: "Token inválido ou expirado". Tentei iniciar o processo novamente, mas o mesmo erro apareceu.\n` +
      `Não recebi outro e-mail de recuperação e o link antigo parece não mais valer. Isso me deixou impossibilitada de acessar a conta.\n` +
      `Peço ajuda urgente para resetar minha senha ou gerar outro link de recuperação válido.\n\n` +
      `Obrigada,\nMariana R.`,
    createdAt: new Date(2025, 10, 28, 21, 20),
    replies: [
      {
        id: "s4g84d8h4rt84h84876845",
        username: "Abraão Sones",
        userInitials: "AS",
        userImageUrl:
          "https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg",
        isCompanyResponse: false,
        replyMessage: "Boa noite, eu também estive o mesmo problema...",
        createdAt: new Date(2025, 11, 5, 9, 15),
      },
      {
        id: "dzfrgnl43knlkn1111",
        username: "Mônica Paiva",
        userInitials: "MP",
        userImageUrl:
          "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg",
        isCompanyResponse: false,
        replyMessage:
          "Oii! Eu conseguir acessar minha conta normalmente. Estou usando o navegador Safari.",
        createdAt: new Date(2025, 11, 5, 9, 15),
      },
    ],
  },
  {
    ticketId: "2025-CX107",
    status: ETicketStatus.IN_PROGRESSTICKET,
    ticketType: ETicketType.SUPORT_TECHNICAL,
    userImageUrl: "https://randomuser.me/api/portraits/men/66.jpg",
    username: "Fernando Gomes",
    userInitials: "FG",
    title: "Bug na visualização de relatórios",
    description:
      `Boa tarde,\n\n` +
      `Quando acesso a aba de relatórios mensais, a tela abre normalmente, mas os dados não carregam — a área permanece em branco. Esperei alguns minutos e nada aparece. Já testei em diferentes navegadores e limpei cache, mas o problema persiste.\n` +
      `O relatório desta vez seria essencial para verificar os valores faturados e pagamentos recebidos. Preciso desse relatório até o final da semana para encaminhar à minha contabilidade.\n\n` +
      `Por favor, poderiam verificar se há falha no backend ou na API de relatórios e me dar um retorno?\n\n` +
      `Abraços,\nFernando G.`,
    createdAt: new Date(2025, 11, 2, 13, 55),
  },
  {
    ticketId: "2025-CX108",
    status: ETicketStatus.NEW_TICKET,
    ticketType: ETicketType.ACCESS,
    userImageUrl: "https://randomuser.me/api/portraits/women/51.jpg",
    username: "Patrícia Fernandes",
    userInitials: "PF",
    title: "Solicitação de upgrade de plano",
    description:
      `Olá equipe,\n\n` +
      `Gostaria de solicitar o upgrade da minha assinatura para o plano Premium a partir do próximo ciclo. Atualmente estou no plano Básico e gostaria de saber o valor pró-rata desse mês e como será feita a cobrança.\n` +
      `Também quero confirmar se o acesso aos recursos avançados será imediato após a aprovação ou somente no próximo ciclo.\n\n` +
      `Agradeço desde já,\nPatrícia F.`,
    createdAt: new Date(2025, 11, 5, 8, 40),
  },
  {
    ticketId: "2025-CX109",
    status: ETicketStatus.RESOLVEDTICKET,
    ticketType: ETicketType.BUG,
    userImageUrl: "https://randomuser.me/api/portraits/men/27.jpg",
    username: "Bruno Henrique",
    userInitials: "BH",
    title: "Erro 500 ao acessar dashboard",
    description:
      `Olá,\n\n` +
      `Após efetuar o login com sucesso, fui redirecionado ao dashboard e, em seguida, recebi um erro interno do servidor (500). A página não carregou e nada é exibido.\n` +
      `Já fechei o navegador, limpei cache e cookies, e até tentei em modo anônimo, mas o erro permanece. Isso me impede de usar qualquer funcionalidade da plataforma.\n` +
      `Por favor, verifiquem os logs do servidor ou a configuração da API para entender a causa desse erro. Preciso de acesso urgente para continuar minhas atividades.\n\n` +
      `Grato,\nBruno H.`,
    createdAt: new Date(2025, 10, 25, 19, 10),
    replies: [
      {
        id: "dsdsc1d5cd1c51c1dc5d1c51c5d1cd51c5",
        username: "José Oliveira",
        userInitials: "JO",
        userImageUrl:
          "https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg",
        isCompanyResponse: false,
        replyMessage: "Boa noite, eu também estive o mesmo problema...",
        createdAt: new Date(2025, 11, 5, 9, 15),
      },
      {
        id: "ds4c5sc1ds5c1scdsd2334443434343",
        username: "Sofhia Batista",
        userInitials: "JO",
        userImageUrl:
          "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg",
        isCompanyResponse: false,
        replyMessage:
          "Oii! Eu conseguir acessar minha conta normalmente. Estou usando o navegador Safari.",
        createdAt: new Date(2025, 11, 5, 9, 15),
      },
      
    ],
  },
  {
    ticketId: "2025-CX110",
    status: ETicketStatus.IN_PROGRESSTICKET,
    ticketType: ETicketType.FEATURE_REQUEST,
    userImageUrl: "https://randomuser.me/api/portraits/women/13.jpg",
    username: "Sofia Castro",
    userInitials: "SC",
    title: "Alteração de e-mail cadastrado",
    description:
      `Oi,\n\n` +
      `Quero atualizar meu e-mail cadastrado para sofia.novo@example.com. Meu e-mail antigo era sofia.antigo@example.com. Já tentei alterar nas configurações, mas apareceu uma mensagem de erro: "Falha na atualização de dados", e a troca não foi efetuada.\n` +
      `Gostaria de saber se há um processo manual para realizar essa alteração ou se posso fazer por meio do suporte. Preciso da mudança o quanto antes por motivos de entrega de documentos importantes.\n\n` +
      `Obrigado,\nSofia C.`,
    createdAt: new Date(2025, 11, 1, 15, 25),
    replies: [
      {
        id: "slgnl453n43lnk5lkn4",
        username: "José Oliveira",
        userInitials: "JO",
        userImageUrl:
          "https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg",
        isCompanyResponse: false,
        replyMessage: "Boa noite, eu também estive o mesmo problema...",
        createdAt: new Date(2025, 11, 5, 9, 15),
      },
      {
        id: "fdnklkn45kln5kln4545454545",
        username: "Sofhia Batista",
        userInitials: "JO",
        userImageUrl:
          "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg",
        isCompanyResponse: false,
        replyMessage:
          "Oii! Eu conseguir acessar minha conta normalmente. Estou usando o navegador Safari.",
        createdAt: new Date(2025, 11, 5, 9, 15),
      },
    ],
  },
];