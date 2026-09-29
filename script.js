// ================= FORMATAR PREÇO =================
function formatarMoeda(valor) {
  if (valor === null || valor === undefined) {
    return "R$ 0,00";
  }
  return new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  }).format(valor);
}

// PRODUTOS DO SITE - ROUPAS
let produtos = [
  {
    id: 1,
    nome: "Camiseta Nike Sportswear",
    categoria: "nike-masculino-roupas",
    marca: "Nike",
    genero: "Masculino",
    tipo: "Roupas",
    preco: 89.9,
    precoOriginal: 119.9,
    desconto: 25,
    imagem: "https://imgnike-a.akamaihd.net/360x360/01626952A8.jpg",
    imagensDetalhes: [
      "https://imgnike-a.akamaihd.net/360x360/01626952A8.jpg",
      "https://imgnike-a.akamaihd.net/360x360/0162697UA2.jpg",
      "https://imgnike-a.akamaihd.net/360x360/016269P1A7.jpg",
    ],
    descricao:
      "A camiseta Nike Sportswear é feita com o nosso tecido de algodão casual e apresenta um caimento clássico, criando uma sensação aconchegante logo no primeiro uso. O logotipo Futura bordado no peito cria um look original da Nike.",
    tamanhos: ["P", "M", "G", "GG"],
    cores: [
      {
        nome: "Branco",
        codigo: "#ffffff",
        imagens: [
          "https://imgnike-a.akamaihd.net/360x360/01626952A8.jpg",
          "https://imgnike-a.akamaihd.net/360x360/01626952A1.jpg",
          "https://imgnike-a.akamaihd.net/360x360/01626952A2.jpg",
        ],
      },
      {
        nome: "Cinza",
        codigo: "#413f3fff",
        imagens: [
          "https://imgnike-a.akamaihd.net/360x360/0162697UA2.jpg",
          "https://imgnike-a.akamaihd.net/360x360/0162697UA3.jpg",
          "https://imgnike-a.akamaihd.net/360x360/0162697UA4.jpg",
        ],
      },
      {
        nome: "Vermelho",
        codigo: "#cc0000ff",
        imagens: [
          "https://imgnike-a.akamaihd.net/360x360/016269P1A7.jpg",
          "https://imgnike-a.akamaihd.net/360x360/016269P1A2.jpg",
          "https://imgnike-a.akamaihd.net/360x360/016269P1A1.jpg",
        ],
      },
    ],
  },
  {
    id: 2,
    nome: "Shorts Nike Club Flow Masculino",
    categoria: "nike-masculino-roupas",
    marca: "Nike",
    genero: "Masculino",
    tipo: "Roupas",
    preco: 246.39,
    precoOriginal: 299.9,
    desconto: 18,
    imagem: "https://imgnike-a.akamaihd.net/360x360/027996IDA3.jpg",
    imagensDetalhes: [
      "https://imgnike-a.akamaihd.net/360x360/027996IDA3.jpg",
      "https://imgnike-a.akamaihd.net/360x360/02799615A3.jpg",
      "https://imgnike-a.akamaihd.net/360x360/027996P1A3.jpg",
    ],
    descricao:
      "Esportivo e versátil, esse shorts é feito para conforto diário descontraído.",
    tamanhos: ["P", "M", "G", "GG"],
    cores: [
      {
        nome: "Preto",
        codigo: "#000000",
        imagens: [
          "https://imgnike-a.akamaihd.net/360x360/027996IDA3.jpg",
          "https://imgnike-a.akamaihd.net/360x360/027996IDA5.jpg",
          "https://imgnike-a.akamaihd.net/360x360/027996IDA2.jpg",
        ],
      },
      {
        nome: " Azul",
        codigo: "#0e39f8ff",
        imagens: [
          "https://imgnike-a.akamaihd.net/360x360/02799615A3.jpg",
          "https://imgnike-a.akamaihd.net/360x360/02799615A5.jpg",
          "https://imgnike-a.akamaihd.net/360x360/02799615A2.jpg",
        ],
      },
      {
        nome: "Vermelho",
        codigo: "#cc0000ff",
        imagens: [
          "https://imgnike-a.akamaihd.net/360x360/027996P1A3.jpg",
          "https://imgnike-a.akamaihd.net/360x360/027996P1A7.jpg",
          "https://imgnike-a.akamaihd.net/360x360/027996P1A2.jpg",
        ],
      },
    ],
  },
  {
    id: 11,
    nome: "Tênis Adidas Ultraboost",
    categoria: "adidas-masculino-calcados",
    marca: "Adidas",
    genero: "Masculino",
    tipo: "Calçados",
    preco: 299.9,
    precoOriginal: 399.9,
    desconto: 25,
    imagem: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=400",
    imagensDetalhes: [
      "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=400",
      "https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?w=400",
      "https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?w=400",
    ],
    descricao:
      "Tênis de corrida com tecnologia Boost para máximo amortecimento",
    tamanhos: ["38", "39", "40", "41", "42", "43", "44"],
    cores: [
      {
        nome: "Preto",
        codigo: "#000000",
        imagens: [
          "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=400",
        ],
      },
      {
        nome: "Branco",
        codigo: "#FFFFFF",
        imagens: [
          "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=400",
        ],
      },
      {
        nome: "Cinza",
        codigo: "#808080",
        imagens: [
          "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=400",
        ],
      },
    ],
  },
  {
    id: 14,
    nome: "Tênis Nike Court Vision Low Next Nature Masculino",
    categoria: "Nike-masculino-calcados",
    marca: "Nike",
    genero: "Masculino",
    tipo: "Calçados",
    preco: 408.49,
    precoOriginal: 599.9,
    desconto: 32,
    imagem: "https://imgnike-a.akamaihd.net/360x360/013702IDA8.jpg",
    imagensDetalhes: [
      "https://imgnike-a.akamaihd.net/360x360/013702IDA8.jpg",
      "https://imgnike-a.akamaihd.net/360x360/01370251A2.jpg",
    ],
    descricao:
      "Conheça o Nike Court Vision Low. Um clássico remixado com pelo menos 20% de materiais reciclados por peso, seu cabedal nítido e camadas costuradas mantêm a alma do estilo original. O colarinho baixo macio mantém a simplicidade e o conforto para o seu mundo",
    tamanhos: ["38", "39", "40", "41", "42", "43", "44"],
    cores: [
      {
        nome: "Preto",
        codigo: "#000000",
        imagens: [
          "https://imgnike-a.akamaihd.net/360x360/013702IDA8.jpg",
          "https://imgnike-a.akamaihd.net/360x360/013702IDA1.jpg",
          "https://imgnike-a.akamaihd.net/360x360/013702IDA3.jpg",
          "https://imgnike-a.akamaihd.net/360x360/013702IDA4.jpg",
        ],
      },
      {
        nome: "Branco",
        codigo: "#FFFFFF",
        imagens: [
          "https://imgnike-a.akamaihd.net/360x360/01370251A2.jpg",
          "https://imgnike-a.akamaihd.net/360x360/01370251A5.jpg",
          "https://imgnike-a.akamaihd.net/360x360/01370251A6.jpg",
          "https://imgnike-a.akamaihd.net/360x360/01370251A7.jpg",
        ],
      },
    ],
  },
  {
    id: 15,
    nome: "Chinelo Nike Victori One Masculino",
    categoria: "Nike-masculino-calcados",
    marca: "Nike",
    genero: "Masculino",
    tipo: "Calçados",
    preco: 189.99,
    precoOriginal: 249.99,
    desconto: 24,
    imagem: "https://imgnike-a.akamaihd.net/360x360/009351IDA2.jpg",
    imagensDetalhes: [
      "https://imgnike-a.akamaihd.net/360x360/009351IDA2.jpg",
      "https://imgnike-a.akamaihd.net/360x360/0093515CA5.jpg",
      "https://imgnike-a.akamaihd.net/360x360/0093511EA3.jpg",
    ],
    descricao:
      "Da praia às arquibancadas, o Victori One é um chinelo indispensável para as atividades diárias.",
    tamanhos: ["38", "39", "40", "41", "42", "43", "44"],
    cores: [
      {
        nome: "Preto",
        codigo: "#000000",
        imagens: [
          "https://imgnike-a.akamaihd.net/360x360/009351IDA2.jpg",
          "https://imgnike-a.akamaihd.net/360x360/009351IDA6.jpg",
          "https://imgnike-a.akamaihd.net/360x360/009351IDA5.jpg",
          "https://imgnike-a.akamaihd.net/360x360/009351IDA4.jpg",
        ],
      },
      {
        nome: "Branco",
        codigo: "#FFFFFF",
        imagens: [
          "https://imgnike-a.akamaihd.net/360x360/0093515CA4.jpg",
          "https://imgnike-a.akamaihd.net/360x360/0093515CA6.jpg",
          "https://imgnike-a.akamaihd.net/360x360/0093515CA3.jpg",
        ],
      },
      {
        nome: "Azul",
        codigo: "#0b3ce0ff",
        imagens: [
          "https://imgnike-a.akamaihd.net/360x360/0093511EA3.jpg",
          "https://imgnike-a.akamaihd.net/360x360/0093511EA2.jpg",
          "https://imgnike-a.akamaihd.net/360x360/0093511EA1.jpg",
          "https://imgnike-a.akamaihd.net/360x360/0093511EA4.jpg",
        ],
      },
    ],
  },
  {
    id: 16,
    nome: "Mochila Nike Brasilia Unissex",
    categoria: "nike-masculino-acessorios",
    marca: "Nike",
    genero: "Masculino",
    tipo: "Acessórios",
    preco: 180.49,
    precoOriginal: 399.99,
    desconto: 29,
    imagem: "https://imgnike-a.akamaihd.net/360x360/013902IDA5.jpg",
    imagensDetalhes: [
      "https://imgnike-a.akamaihd.net/360x360/013902IDA5.jpg",
      "https://imgnike-a.akamaihd.net/250x250/013902A1.jpg",
      "https://imgnike-a.akamaihd.net/360x360/01390217A2.jpg",
    ],
    descricao:
      "Guarde seu equipamento e saia por aí com a mochila Nike Brasilia. Ela oferece vários bolsos para ajudar a manter a organização, incluindo um compartimento para armazenar seu notebook, bolsos laterais em tela para garrafas de água e um bolso com zíper por dentro para manter pequenos objetos em segurança.",
    tamanhos: ["Único"],
    cores: [
      {
        nome: "Preto",
        codigo: "#000000",
        imagens: [
          "https://imgnike-a.akamaihd.net/360x360/013902IDA5.jpg",
          "https://imgnike-a.akamaihd.net/360x360/013902IDA7.jpg",
          "https://imgnike-a.akamaihd.net/360x360/013902IDA12.jpg",
          "https://imgnike-a.akamaihd.net/360x360/013902IDA2.jpg",
        ],
      },
      {
        nome: "Vermelho",
        codigo: "#ec0a0aff",
        imagens: [
          "https://imgnike-a.akamaihd.net/250x250/013902A1.jpg",
          "https://imgnike-a.akamaihd.net/360x360/013902A1A2.jpg",
          "https://imgnike-a.akamaihd.net/360x360/013902A1A3.jpg",
          "https://imgnike-a.akamaihd.net/360x360/013902A1A8.jpg",
          "https://imgnike-a.akamaihd.net/360x360/013902A1A5.jpg",
        ],
      },
      {
        nome: "Azul",
        codigo: "#0546faff",
        imagens: [
          " https://imgnike-a.akamaihd.net/360x360/01390217A2.jpg",
          "https://imgnike-a.akamaihd.net/360x360/01390217A4.jpg",
          "https://imgnike-a.akamaihd.net/360x360/01390217A7.jpg",
          "https://imgnike-a.akamaihd.net/360x360/01390217A11.jpg",
          "https://imgnike-a.akamaihd.net/360x360/01390217A1.jpg",
        ],
      },
    ],
  },
  {
    id: 17,
    nome: "Mochila Nike Heritage Unissex",
    categoria: "nike-masculino-acessorios",
    marca: "Nike",
    genero: "Masculino",
    tipo: "Acessórios",
    preco: 379.49,
    precoOriginal: 399.99,
    desconto: 5,
    imagem: "https://imgnike-a.akamaihd.net/360x360/012504IDA4.jpg",
    imagensDetalhes: [
     "https://imgnike-a.akamaihd.net/360x360/012504IDA4.jpg",
      "https://imgnike-a.akamaihd.net/360x360/01250400A2.jpg",
    ],
    descricao:
      "Pronta para o trabalho ou escola, a mochila Nike Sportswear Heritage atualiza um look clássico com opções de armazenamento inteligentes para proteger seus dispositivos eletrônicos. Um compartimento almofadado interno proporciona acesso rápido ao seu notebook, enquanto os bolsos frontais e laterais para acessórios ajudam a manter cabos, calculadora e celular organizados e fáceis de acessar.",
    tamanhos: ["Único"],
    cores: [
      {
        nome: "Preto",
        codigo: "#000000",
        imagens: [
       ,
          "https://imgnike-a.akamaihd.net/360x360/012504IDA4.jpg",
          "https://imgnike-a.akamaihd.net/360x360/012504IDA5.jpg",
          "https://imgnike-a.akamaihd.net/360x360/012504IDA12.jpg",
          "https://imgnike-a.akamaihd.net/360x360/012504IDA2.jpg",
        ],
      },
      {
        nome: "Marron",
        codigo: "#532401ff",
        imagens: [
          "https://imgnike-a.akamaihd.net/360x360/01250400A2.jpg",
          "https://imgnike-a.akamaihd.net/360x360/01250400A3.jpg",
          "https://imgnike-a.akamaihd.net/360x360/01250400A4.jpg",
          "https://imgnike-a.akamaihd.net/360x360/01250400A7.jpg",
          "https://imgnike-a.akamaihd.net/360x360/01250400A6.jpg",
        ],
      },
    ],
  },
  {
    id: 18,
    nome: "Camiseta Nike Sportswear Essential Feminina",
    categoria: "nike-Feminino-roupas",
    marca: "Nike",
    genero: "Feminino",
    tipo: "Roupas",
    preco: 123.49,
    precoOriginal: 129.99,
    desconto: 5,
    imagem: "https://imgnike-a.akamaihd.net/360x360/007194IDA2.jpg",
    imagensDetalhes: [
      "https://imgnike-a.akamaihd.net/360x360/007194IDA2.jpg",
      "https://imgnike-a.akamaihd.net/360x360/007194IDA3.jpg",
      "https://imgnike-a.akamaihd.net/360x360/007194IDA4.jpg",
      "https://imgnike-a.akamaihd.net/360x360/007194IDA9.jpg",
    ],
    descricao:
      "A camiseta Nike Sportswear Essential é um estilo em jersey de algodão macio com bainha cropped.",
    tamanhos: ["P", "M", "G", "GG"],
    cores: [
      {
        nome: "Preto",
        codigo: "#000000",
        imagens: [
          "https://imgnike-a.akamaihd.net/360x360/007194IDA2.jpg",
          "https://imgnike-a.akamaihd.net/360x360/007194IDA4.jpg",
          "https://imgnike-a.akamaihd.net/360x360/007194IDA9.jpg",
        ],
      },
      {
        nome: "Branco",
        codigo: "#FFFFFF",
        imagens: [
          "https://imgnike-a.akamaihd.net/360x360/00719451A2.jpg",
          "https://imgnike-a.akamaihd.net/360x360/00719451A3.jpg",
          "https://imgnike-a.akamaihd.net/360x360/00719451A5.jpg",
        ],
      },
      {
        nome: "Verde",
        codigo: "#04f560ff",
        imagens: [
          "https://imgnike-a.akamaihd.net/360x360/007194NYA1.jpg",
          "https://imgnike-a.akamaihd.net/360x360/007194NYA4.jpg",
          "https://imgnike-a.akamaihd.net/360x360/007194NYA6.jpg",
        ],
      },
    ],
  },
  {
    id: 19,
    nome: "Camiseta Nike Dri-FIT Feminina",
    categoria: "nike-Feminino-roupas",
    marca: "Nike",
    genero: "Feminino",
    tipo: "Roupas",
    preco: 94.99,
    precoOriginal: 129.99,
    desconto: 27,
    imagem: "https://imgnike-a.akamaihd.net/360x360/023826P1A2.jpg",
    imagensDetalhes: [
      "https://imgnike-a.akamaihd.net/360x360/023826P1A2.jpg",
      "https://imgnike-a.akamaihd.net/360x360/023826IDA4.jpg",
      "https://imgnike-a.akamaihd.net/360x360/02382651A2.jpg",
    ],
    descricao:
      "Aumente o calor nesta camiseta relaxada. O tecido elegante absorve o suor para que você permaneça seco e confortável enquanto treina.",
    tamanhos: ["P", "M", "G", "GG"],
    cores: [
      {
        nome: "Preto",
        codigo: "#000000",
        imagens: [
          "https://imgnike-a.akamaihd.net/360x360/023826IDA2.jpg",
          "https://imgnike-a.akamaihd.net/360x360/023826IDA3.jpg",
          "https://imgnike-a.akamaihd.net/360x360/023826IDA4.jpg",
        ],
      },
      {
        nome: "Branco",
        codigo: "#FFFFFF",
        imagens: [
          "https://imgnike-a.akamaihd.net/360x360/02382651A2.jpg",
          "https://imgnike-a.akamaihd.net/360x360/02382651A4.jpg",
          "https://imgnike-a.akamaihd.net/360x360/02382651A3.jpg",
        ],
      },
      {
        nome: "Vermelho",
        codigo: "#ff0505ff",
        imagens: [
          "https://imgnike-a.akamaihd.net/360x360/023826P1A2.jpg",
          "https://imgnike-a.akamaihd.net/360x360/023826P1A3.jpg",
          "https://imgnike-a.akamaihd.net/360x360/023826P1A4.jpg",
        ],
      },
    ],
  },
  {
    id: 20,
    nome: "Tênis Nike Air Zoom Bella 7 Feminino",
    categoria: "Nike-Feminino-calcados",
    marca: "Nike",
    genero: "Feminino",
    tipo: "Calçados",
    preco: 617.49,
    precoOriginal: 599.99,
    desconto: 5,
    imagem: "https://imgnike-a.akamaihd.net/360x360/059653IEA1.jpg",
    imagensDetalhes: [
      "https://imgnike-a.akamaihd.net/360x360/059653IEA1.jpg",
      "https://imgnike-a.akamaihd.net/360x360/059653MTA1.jpg",
      "https://imgnike-a.akamaihd.net/360x360/0596530LA1.jpg",
    ],
    descricao:
      "Mantenha-se firme e forte, seja no meio de uma série ou se movimentando no ritmo do seu treino com o Bella 7. Amortecimento Zoom Air oferece a combinação certa de estabilidade de alto nível e suavidade.",
    tamanhos: ["38", "39", "40", "41", "42", "43", "44"],
    cores: [
      {
        nome: "Preto",
        codigo: "#000000",
        imagens: [
          "https://imgnike-a.akamaihd.net/360x360/059653IEA1.jpg",
          "https://imgnike-a.akamaihd.net/360x360/059653IEA4.jpg",
          "https://imgnike-a.akamaihd.net/360x360/059653IEA5.jpg",
        ],
      },

      {
        nome: "Rosa",
        codigo: "#ff0ff3ff",
        imagens: [
          "https://imgnike-a.akamaihd.net/360x360/059653MTA1.jpg",
          "https://imgnike-a.akamaihd.net/360x360/059653MTA4.jpg",
          "https://imgnike-a.akamaihd.net/360x360/059653MTA5.jpg",
          "https://imgnike-a.akamaihd.net/360x360/059653MTA7.jpg",
        ],
      },

      {
        nome: "Verde",
        codigo: "#0eec46ff",
        imagens: [
          "https://imgnike-a.akamaihd.net/360x360/0596530LA1.jpg",
          "https://imgnike-a.akamaihd.net/360x360/0596530LA4.jpg",
          "https://imgnike-a.akamaihd.net/360x360/0596530LA2.jpg",
          "https://imgnike-a.akamaihd.net/360x360/0596530LA5.jpg",
        ],
      },
    ],
  },
  {
    id: 21,
    nome: "Tênis Nike Court Vision Low Next Nature Feminino",
    categoria: "Nike-Feminino-calcados",
    marca: "Nike",
    genero: "Feminino",
    tipo: "Calçados",
    preco: 419.99,
    precoOriginal: 599.99,
    desconto: 30,
    imagem: "https://imgnike-a.akamaihd.net/360x360/01371656A1.jpg",
    imagensDetalhes: [
      "https://imgnike-a.akamaihd.net/360x360/01371656A1.jpg",
      "https://imgnike-a.akamaihd.net/360x360/013716IHA2.jpg",
    ],
    descricao:
      "Curte muito o look clássico do basquete dos anos 80, mas tem uma queda pela cultura de ritmo acelerado dos jogos atuais? Conheça o Nike Court Vision Low Next Nature.",
    tamanhos: ["38", "39", "40", "41", "42", "43", "44"],
    cores: [
      {
        nome: "Preto",
        codigo: "#000000",
        imagens: [
          "https://imgnike-a.akamaihd.net/360x360/013716IHA2.jpg",
          "https://imgnike-a.akamaihd.net/360x360/013716IHA5.jpg",
          "https://imgnike-a.akamaihd.net/360x360/013716IHA6.jpg",
          "https://imgnike-a.akamaihd.net/360x360/013716IHA8.jpg",
        ],
      },
      {
        nome: "Azul",
        codigo: "#35b3eeff",
        imagens: [
          "https://imgnike-a.akamaihd.net/360x360/01371656A1.jpg",
          "https://imgnike-a.akamaihd.net/360x360/01371656A7.jpg",
          "https://imgnike-a.akamaihd.net/360x360/01371656A8.jpg",
          "https://imgnike-a.akamaihd.net/360x360/01371656A4.jpg",
        ],
      },
    ],
  },
  {
    id: 22,
    nome: "Shorts Nike One Feminino",
    categoria: "nike-Feminino-roupas",
    marca: "Nike",
    genero: "Feminino",
    tipo: "Roupas",
    preco: 161.49,
    precoOriginal: 279.99,
    desconto: 25,
    imagem: "https://imgnike-a.akamaihd.net/360x360/024932IDA3.jpg",
    imagensDetalhes: [
      "https://imgnike-a.akamaihd.net/360x360/024932IDA3.jpg",
      "https://imgnike-a.akamaihd.net/360x360/0249327VA2.jpg",
      "https://imgnike-a.akamaihd.net/360x360/024932MVA3.jpg",
    ],
    descricao:
      "Esse shorts é aquele feito para tudo o que você faz - de longas caminhadas a HIIT a tarefas do dia a dia.",
    tamanhos: ["P", "M", "G", "GG"],
    cores: [
      {
        nome: "Preto",
        codigo: "#000000",
        imagens: [
          "https://imgnike-a.akamaihd.net/360x360/024932IDA3.jpg",
          "https://imgnike-a.akamaihd.net/360x360/024932IDA5.jpg",
          "https://imgnike-a.akamaihd.net/360x360/024932IDA4.jpg",
          "https://imgnike-a.akamaihd.net/360x360/024932IDA6.jpg",
          "https://imgnike-a.akamaihd.net/360x360/024932IDA8.jpg",
        ],
      },
      {
        nome: "Cinza",
        codigo: "#413f3fff",
        imagens: [
          "https://imgnike-a.akamaihd.net/360x360/0249327VA2.jpg",
          "https://imgnike-a.akamaihd.net/360x360/0249327VA4.jpg",
          "https://imgnike-a.akamaihd.net/360x360/0249327VA3.jpg",
          "https://imgnike-a.akamaihd.net/360x360/0249327VA5.jpg",
        ],
      },
      {
        nome: "Rosa",
        codigo: "#f096d2ff",
        imagens: [
          "https://imgnike-a.akamaihd.net/360x360/024932MVA3.jpg",
          "https://imgnike-a.akamaihd.net/360x360/024932MVA5.jpg",
          "https://imgnike-a.akamaihd.net/360x360/024932MVA6.jpg",
          "https://imgnike-a.akamaihd.net/360x360/024932MVA2.jpg",
        ],
      },
    ],
  },
  {
    id: 23,
    nome: "Saia Nike Dri-FIT Victory Feminina",
    categoria: "nike-feminino-roupas",
    marca: "Nike",
    genero: "Feminino",
    tipo: "Roupas",
    preco: 332.49,
    precoOriginal: 349.99,
    desconto: 5,
    imagem: "https://imgnike-a.akamaihd.net/360x360/059875IEA1.jpg",
    imagensDetalhes: [
      "https://imgnike-a.akamaihd.net/360x360/059875IEA1.jpg",
      "https://imgnike-a.akamaihd.net/360x360/05987551A2.jpg",
    ],
    descricao:
      "Feita com tecido supermacio e ultraelástico que seca rapidamente, esta saia com babados permite que você se concentre facilmente no seu swing. Shorts integrados com bolsos oferecem armazenamento para seus itens essenciais e cobertura em todas as suas posições.",
    tamanhos: ["P", "M", "G", "GG"],
    cores: [
      {
        nome: "Branco",
        codigo: "#fffff",
        imagens: [
          "https://imgnike-a.akamaihd.net/360x360/05987551A2.jpg",
          "https://imgnike-a.akamaihd.net/360x360/05987551A1.jpg",
          "https://imgnike-a.akamaihd.net/360x360/05987551A7.jpg",
        ],
      },
      {
        nome: "Preto",
        codigo: "#000000",
        imagens: [
          "https://imgnike-a.akamaihd.net/360x360/059875IEA1.jpg",
          "https://imgnike-a.akamaihd.net/360x360/059875IEA7.jpg",
          "https://imgnike-a.akamaihd.net/360x360/059875IEA2.jpg",
        ],
      },
    ],
  },
  {
    id: 24,
    nome: "Saia Nike Sportswear Feminina",
    categoria: "nike-feminino-roupas",
    marca: "Nike",
    genero: "Feminino",
    tipo: "Roupas",
    preco: 341.99,
    precoOriginal: 499.99,
    desconto: 32,
    imagem: "https://imgnike-a.akamaihd.net/360x360/030038NXA5.jpg",
    imagensDetalhes: ["https://imgnike-a.akamaihd.net/360x360/030038NXA5.jpg"],
    descricao:
      "Com a participação de Naomi Osaka, desenhamos essa saia plissada para celebrar a tenista dentro e fora da quadra. Os detalhes cruzados no cós remetem às suas origens no tênis. O tecido woven tem estrutura suficiente para manter o formato, mas ainda é leve o bastante para garantir fluidez aos movimentos.",
    tamanhos: ["P", "M", "G", "GG"],
    cores: [
      {
        nome: "Verde",
        codigo: "#04f560ff",

        imagens: [
          "https://imgnike-a.akamaihd.net/360x360/030038NXA5.jpg",
          "https://imgnike-a.akamaihd.net/360x360/030038NXA2.jpg",
          "https://imgnike-a.akamaihd.net/360x360/030038NXA4.jpg",
          "https://imgnike-a.akamaihd.net/360x360/030038NXA3.jpg",
        ],
      },
    ],
  },
  {
    id: 26,
    nome: "Bolsa Transversal Nike Heritage Feminina",
    categoria: "nike-feminino-acessorios",
    marca: "Nike",
    genero: "Feminino",
    tipo: "Acessórios",
    preco: 113.99,
    precoOriginal: 119.99,
    desconto: 5,
    imagem: "https://imgnike-a.akamaihd.net/360x360/012411NZA2.jpg",
    imagensDetalhes: [
      "https://imgnike-a.akamaihd.net/360x360/012411NZA2.jpg",
      "https://imgnike-a.akamaihd.net/360x360/0124117TA1.jpg",
      "https://imgnike-a.akamaihd.net/360x360/01241100A2.jpg",
    ],
    descricao:
      "Uma alternativa ao estilo clássico da pochete, a bolsa cruzada Nike Heritage oferece armazenamento que deixa as mãos livres em um design que você pode usar sobre o peito",
    tamanhos: ["Único"],
    cores: [
      {
        nome: "Cinza",
        codigo: "#5e5d5dff",
        imagens: [
          "https://imgnike-a.akamaihd.net/360x360/0124117TA1.jpg",
          "https://imgnike-a.akamaihd.net/360x360/0124117TA2.jpg",
          "https://imgnike-a.akamaihd.net/360x360/0124117TA4.jpg",
          "https://imgnike-a.akamaihd.net/360x360/0124117TA3.jpg",
          "https://imgnike-a.akamaihd.net/360x360/0124117TA5.jpg",
          "https://imgnike-a.akamaihd.net/360x360/0124117TA6.jpg",
        ],
      },

      {
        nome: "Verde",
        codigo: "#04f560ff",
        imagens: [
          "https://imgnike-a.akamaihd.net/360x360/012411NZA2.jpg",
          "https://imgnike-a.akamaihd.net/360x360/012411NZA3.jpg",
          "https://imgnike-a.akamaihd.net/360x360/012411NZA5.jpg",
          "https://imgnike-a.akamaihd.net/360x360/012411NZA6.jpg",
          "https://imgnike-a.akamaihd.net/360x360/012411NZA7.jpg",
        ],
      },

      {
        nome: "Marron",
        codigo: "#532401ff",
        imagens: [
          "https://imgnike-a.akamaihd.net/360x360/01241100A2.jpg",
          "https://imgnike-a.akamaihd.net/360x360/01241100A3.jpg",
          "https://imgnike-a.akamaihd.net/360x360/01241100A5.jpg",
          "https://imgnike-a.akamaihd.net/360x360/01241100A4.jpg",
          "https://imgnike-a.akamaihd.net/360x360/01241100A6.jpg",
        ],
      },
    ],
  },
  {
    id: 27,
    nome: "Jaqueta Nike Sportswear Windrunner Feminina",
    categoria: "Nike-feminino-roupas",
    marca: "Nike",
    genero: "Feminino",
    tipo: "Roupas",
    preco: 474.99,
    precoOriginal: 499.99,
    desconto: 5,
    imagem: "https://imgnike-a.akamaihd.net/360x360/02994451A1.jpg",
    imagensDetalhes: [
      "https://imgnike-a.akamaihd.net/360x360/02994451A1.jpg",
      "https://imgnike-a.akamaihd.net/360x360/029944IEA1.jpg",
    ],
    descricao:
      "Esta Windrunner é fabricada em tecido microripstop leve, mas resistente. Os ombros caídos e o espaço extra no corpo garantem um caimento folgado que pode ser ajustado com os elásticos na bainha.",
    tamanhos: ["P", "M", "G", "GG"],
    cores: [
      {
        nome: "Branco",
        codigo: "#fffff",
        imagens: [
          "https://imgnike-a.akamaihd.net/360x360/02994451A1.jpg",
          "https://imgnike-a.akamaihd.net/360x360/02994451A2.jpg",
          "https://imgnike-a.akamaihd.net/360x360/02994451A3.jpg",
          "https://imgnike-a.akamaihd.net/360x360/02994451A6.jpg",
        ],
      },
      {
        nome: "Verde",
        codigo: "#62bb71ff",
        imagens: [
          "https://imgnike-a.akamaihd.net/360x360/029944IEA1.jpg",
          "https://imgnike-a.akamaihd.net/360x360/029944IEA2.jpg",
          "https://imgnike-a.akamaihd.net/360x360/029944IEA3.jpg",
          "https://imgnike-a.akamaihd.net/360x360/029944IEA4.jpg",
        ],
      },
    ],
  },
  {
    id: 28,
    nome: "Jaqueta Nike Sportswear Club Fleece Feminina",
    categoria: "Nike-feminino-roupas",
    marca: "Nike",
    genero: "Feminino",
    tipo: "Roupas",
    preco: 379.99,
    precoOriginal: 399.99,
    desconto: 5,
    imagem: "https://imgnike-a.akamaihd.net/360x360/022904IEA1.jpg",
    imagensDetalhes: [
      "https://imgnike-a.akamaihd.net/360x360/022904IEA1.jpg",
      "https://imgnike-a.akamaihd.net/360x360/02290482A8.jpg",
    ],
    descricao:
      "O moletom Club Fleece, universalmente amado por seu conforto e consistência, foi feito para todo mundo. Sempre macias e fabricadas com o nosso caimento solto, elas são um opção básica para impulsionar qualquer atividade. Este modelo com zíper inteiriço regula a cobertura rapidamente. Feche-o quando o vento estiver forte ou deixe-o aberto para mostrar as suas camisetas e tops favoritos.",
    tamanhos: ["P", "M", "G", "GG"],
    cores: [
      {
        nome: "Branco",
        codigo: "#ffffff",
        imagens: [
          "https://imgnike-a.akamaihd.net/360x360/02290482A8.jpg",
          "https://imgnike-a.akamaihd.net/360x360/02290482A1.jpg",
          "https://imgnike-a.akamaihd.net/360x360/02290482A3.jpg",
          "https://imgnike-a.akamaihd.net/360x360/02290482A6.jpg",
        ],
      },
      {
        nome: "Verde",
        codigo: "#17802eff",
        imagens: [
          "https://imgnike-a.akamaihd.net/360x360/022904IEA1.jpg",
          "https://imgnike-a.akamaihd.net/360x360/022904IEA2.jpg",
          "https://imgnike-a.akamaihd.net/360x360/022904IEA3.jpg",
          "https://imgnike-a.akamaihd.net/360x360/022904IEA4.jpg",
        ],
      },
    ],
  },

  {
    id: 13,
    nome: "Calça Nike Club Knit Masculina",
    categoria: "nike-masculino-roupas",
    marca: "Nike",
    genero: "Masculino",
    tipo: "Roupas",
    preco: 275.49,
    precoOriginal: 349.99,
    desconto: 21,
    imagem: "https://imgnike-a.akamaihd.net/360x360/0289577TA10.jpg",
    imagensDetalhes: [
      "https://imgnike-a.akamaihd.net/360x360/0289577TA10.jpg",
      "https://imgnike-a.akamaihd.net/360x360/028957IDA11.jpg",
    ],
    descricao:
      "Fácil de estilizar e confortável de usar, nossa calça Nike Club está pronto para se tornar uma peça versátil do seu guarda-roupa casual. ",
    tamanhos: ["P", "M", "G", "GG"],
    cores: [
      {
        nome: "Cinza",
        codigo: "#363434ff",
        imagens: [
          "https://imgnike-a.akamaihd.net/360x360/0289577TA10.jpg",
          "https://imgnike-a.akamaihd.net/360x360/0289577TA1.jpg",
          "https://imgnike-a.akamaihd.net/360x360/0289577TA2.jpg",
        ],
      },
      {
        nome: "Preto",
        codigo: "#000000",
        imagens: [
          "https://imgnike-a.akamaihd.net/360x360/028957IDA11.jpg",
          "https://imgnike-a.akamaihd.net/360x360/028957IDA1.jpg",
          "https://imgnike-a.akamaihd.net/360x360/028957IDA2.jpg",
        ],
      },
    ],
  },
  {
    id: 12,
    nome: "Vestido Zara Floral",
    categoria: "zara-feminino-roupas",
    marca: "Zara",
    genero: "Feminino",
    tipo: "Roupas",
    preco: 129.9,
    precoOriginal: 179.9,
    desconto: 28,
    imagem:
      "https://images.unsplash.com/photo-1595777457583-95e059d581b8?w=400",
    imagensDetalhes: [
      "https://images.unsplash.com/photo-1595777457583-95e059d581b8?w=400",
      "https://images.unsplash.com/photo-1515372039744-b8f02a3ae446?w=400",
      "https://images.unsplash.com/photo-1566479179817-c0d9de7c3f6a?w=400",
    ],
    descricao: "Vestido elegante com estampa floral para ocasiões especiais",
    tamanhos: ["PP", "P", "M", "G", "GG"],
    cores: [
      {
        nome: "Rosa",
        codigo: "#FFB6C1",
        imagens: [
          "https://images.unsplash.com/photo-1595777457583-95e059d581b8?w=400",
        ],
      },
      {
        nome: "Azul",
        codigo: "#87CEEB",
        imagens: [
          "https://images.unsplash.com/photo-1595777457583-95e059d581b8?w=400",
        ],
      },
      {
        nome: "Verde",
        codigo: "#98FB98",
        imagens: [
          "https://images.unsplash.com/photo-1595777457583-95e059d581b8?w=400",
        ],
      },
    ],
  },
  {
    id: 4,
    nome: "Jaqueta Puma Windbreaker",
    categoria: "puma-masculino-roupas",
    marca: "Puma",
    genero: "Masculino",
    tipo: "Roupas",
    preco: 199.9,
    precoOriginal: 249.9,
    desconto: 20,
    imagem: "https://images.unsplash.com/photo-1551028719-00167b16eac5?w=400",
    imagensDetalhes: [
      "https://images.unsplash.com/photo-1551028719-00167b16eac5?w=400",
      "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?w=400",
      "https://images.unsplash.com/photo-1551698618-1dfe5d97d256?w=400",
    ],
    descricao: "Jaqueta corta-vento com tecnologia repelente à água",
    tamanhos: ["P", "M", "G", "GG"],
    cores: [
      {
        nome: "Preto",
        codigo: "#000000",
        imagens: [
          "https://images.unsplash.com/photo-1551028719-00167b16eac5?w=400",
        ],
      },
      {
        nome: "Azul",
        codigo: "#0000FF",
        imagens: [
          "https://images.unsplash.com/photo-1551028719-00167b16eac5?w=400",
        ],
      },
      {
        nome: "Vermelho",
        codigo: "#FF0000",
        imagens: [
          "https://images.unsplash.com/photo-1551028719-00167b16eac5?w=400",
        ],
      },
    ],
  },
  {
    id: 5,
    nome: "Bolsa H&M Crossbody",
    categoria: "hm-feminino-acessorios",
    marca: "H&M",
    genero: "Feminino",
    tipo: "Acessórios",
    preco: 49.9,
    precoOriginal: 69.9,
    desconto: 29,
    imagem: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=400",
    imagensDetalhes: [
      "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=400",
      "https://images.unsplash.com/photo-1584917865442-de89df76afd3?w=400",
      "https://images.unsplash.com/photo-1594223274512-ad4803739b7c?w=400",
    ],
    descricao: "Bolsa transversal elegante e prática para o dia a dia",
    tamanhos: ["Único"],
    cores: [
      {
        nome: "Preto",
        codigo: "#000000",
        imagens: [
          "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=400",
        ],
      },
      {
        nome: "Marrom",
        codigo: "#8B4513",
        imagens: [
          "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=400",
        ],
      },
      {
        nome: "Bege",
        codigo: "#F5F5DC",
        imagens: [
          "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=400",
        ],
      },
    ],
  },
  {
    id: 6,
    nome: "Calça Uniqlo Jeans",
    categoria: "uniqlo-masculino-roupas",
    marca: "Uniqlo",
    genero: "Masculino",
    tipo: "Roupas",
    preco: 89.9,
    precoOriginal: null,
    desconto: null,
    imagem:
      "https://images.unsplash.com/photo-1475178626620-a4d074967452?w=400",
    imagensDetalhes: [
      "https://images.unsplash.com/photo-1475178626620-a4d074967452?w=400",
      "https://images.unsplash.com/photo-1506629905607-1b1b1b1b1b1b?w=400",
      "https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?w=400",
    ],
    descricao: "Calça jeans clássica com corte moderno e confortável",
    tamanhos: ["38", "40", "42", "44", "46"],
    cores: [
      {
        nome: "Azul Claro",
        codigo: "#87CEEB",
        imagens: [
          "https://images.unsplash.com/photo-1475178626620-a4d074967452?w=400",
        ],
      },
      {
        nome: "Azul Escuro",
        codigo: "#000080",
        imagens: [
          "https://images.unsplash.com/photo-1475178626620-a4d074967452?w=400",
        ],
      },
      {
        nome: "Preto",
        codigo: "#000000",
        imagens: [
          "https://images.unsplash.com/photo-1475178626620-a4d074967452?w=400",
        ],
      },
    ],
  },
  {
    id: 7,
    nome: "Sandália Nike Feminina",
    categoria: "nike-feminino-calcados",
    marca: "Nike",
    genero: "Feminino",
    tipo: "Calçados",
    preco: 119.9,
    precoOriginal: 159.9,
    desconto: 25,
    imagem: "https://images.unsplash.com/photo-1543163521-1bf539c55dd2?w=400",
    imagensDetalhes: [
      "https://images.unsplash.com/photo-1543163521-1bf539c55dd2?w=400",
      "https://images.unsplash.com/photo-1549298916-b41d501d3772?w=400",
      "https://images.unsplash.com/photo-1543163521-1bf539c55dd2?w=400",
    ],
    descricao: "Sandália esportiva com tecnologia de amortecimento",
    tamanhos: ["35", "36", "37", "38", "39", "40"],
    cores: [
      {
        nome: "Rosa",
        codigo: "#FFB6C1",
        imagens: [
          "https://images.unsplash.com/photo-1543163521-1bf539c55dd2?w=400",
        ],
      },
      {
        nome: "Branco",
        codigo: "#FFFFFF",
        imagens: [
          "https://images.unsplash.com/photo-1543163521-1bf539c55dd2?w=400",
        ],
      },
      {
        nome: "Preto",
        codigo: "#000000",
        imagens: [
          "https://images.unsplash.com/photo-1543163521-1bf539c55dd2?w=400",
        ],
      },
    ],
  },
  {
    id: 8,
    nome: "Moletom Adidas Hoodie",
    categoria: "adidas-masculino-roupas",
    marca: "Adidas",
    genero: "Masculino",
    tipo: "Roupas",
    preco: 149.9,
    precoOriginal: 199.9,
    desconto: 25,
    imagem:
      "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcTBKCVDafdtm4rW541zPKuogeYl-V5suioSWS03H2Wzfn0CvLiCYqW09FazX6W9IEdOHUbUOBoRC3m0Mizkfh93AEKn40uMIJBnuQbCYnIYw-ulphKtPvB4",
    imagensDetalhes: [
      "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcTBKCVDafdtm4rW541zPKuogeYl-V5suioSWS03H2Wzfn0CvLiCYqW09FazX6W9IEdOHUbUOBoRC3m0Mizkfh93AEKn40uMIJBnuQbCYnIYw-ulphKtPvB4",
      "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcR2lxt5IAlVwFxU5LJE9R26keFLRdhoKUSM79uB3ydT8fhUUJapinLx3yz27mbPGErgIbRNhHdHb6i5dybLbEpX3_UxJjEqiUAZPf6Ii6Om49Z9L-WGDvVp",
      "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcQj4r4lHAb84L-1mNdMAZ-QPsnuJ-ZVLSr8y9wa2VoU0ntn63ZicxTb3Y2Z_gdYmnUSEYaEwLLw1nxsPLHdQQTeZzO635ZnRwY5Jc7isiYm_LgFD3pDYX3Chw",
    ],
    descricao: "Moletom com capuz confortável e elegante",
    tamanhos: ["PP", "P", "M", "G", "GG"],
    cores: [
      {
        nome: "Cinza",
        codigo: "#808080",
        imagens: [
          "https://images.unsplash.com/photo-1556821840-3a63f95609a4?w=400",
        ],
      },
      {
        nome: "Preto",
        codigo: "#000000",
        imagens: [
          "https://images.unsplash.com/photo-1556821840-3a63f95609a4?w=400",
        ],
      },
      {
        nome: "Rosa",
        codigo: "#FFB6C1",
        imagens: [
          "https://images.unsplash.com/photo-1556821840-3a63f95609a4?w=400",
        ],
      },
    ],
  },
  {
    id: 9,
    nome: "Tênis Infantil Nike",
    categoria: "nike-infantil-calcados",
    marca: "Nike",
    genero: "Infantil",
    tipo: "Calçados",
    preco: 89.9,
    precoOriginal: 119.9,
    desconto: 25,
    imagem: "https://images.unsplash.com/photo-1549298916-b41d501d3772?w=400",
    imagensDetalhes: [
      "https://images.unsplash.com/photo-1549298916-b41d501d3772?w=400",
      "https://images.unsplash.com/photo-1543163521-1bf539c55dd2?w=400",
      "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=400",
    ],
    descricao: "Tênis infantil colorido e confortável para brincadeiras",
    tamanhos: ["28", "30", "32", "34", "36"],
    cores: [
      {
        nome: "Azul",
        codigo: "#0000FF",
        imagens: [
          "https://images.unsplash.com/photo-1549298916-b41d501d3772?w=400",
        ],
      },
      {
        nome: "Rosa",
        codigo: "#FFB6C1",
        imagens: [
          "https://images.unsplash.com/photo-1549298916-b41d501d3772?w=400",
        ],
      },
      {
        nome: "Verde",
        codigo: "#00FF00",
        imagens: [
          "https://images.unsplash.com/photo-1549298916-b41d501d3772?w=400",
        ],
      },
    ],
  },
  {
    id: 10,
    nome: "Conjunto Pijama Uniqlo",
    categoria: "uniqlo-infantil-roupas",
    marca: "Uniqlo",
    genero: "Infantil",
    tipo: "Roupas",
    preco: 59.9,
    precoOriginal: 79.9,
    desconto: 25,
    imagem:
      "https://images.unsplash.com/photo-1571945153237-4929e783af4a?w=400",
    imagensDetalhes: [
      "https://images.unsplash.com/photo-1571945153237-4929e783af4a?w=400",
      "https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?w=400",
      "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=400",
    ],
    descricao: "Conjunto de pijama infantil macio e confortável",
    tamanhos: ["2-3 anos", "4-5 anos", "6-7 anos", "8-9 anos"],
    cores: [
      {
        nome: "Azul",
        codigo: "#0000FF",
        imagens: [
          "https://images.unsplash.com/photo-1571945153237-4929e783af4a?w=400",
        ],
      },
      {
        nome: "Rosa",
        codigo: "#FFB6C1",
        imagens: [
          "https://images.unsplash.com/photo-1571945153237-4929e783af4a?w=400",
        ],
      },
      {
        nome: "Verde",
        codigo: "#00FF00",
        imagens: [
          "https://images.unsplash.com/photo-1571945153237-4929e783af4a?w=400",
        ],
      },
    ],
  },
];

const containerProdutos = document.querySelector(".container-produtos");
const modalCarrinho = document.getElementById("modalCarrinho");
const fecharCarrinhoBtn = document.getElementById("fecharCarrinho");

// ================= MEU CARRINHO =================
let carrinho = JSON.parse(localStorage.getItem("carrinho")) || [];

function salvarCarrinho() {
  localStorage.setItem("carrinho", JSON.stringify(carrinho));
}

function adicionarAoCarrinho(id) {
  let logado = localStorage.getItem("logado");
  if (logado !== "true") {
    fecharModalDetalhes();
    modal.style.display = "flex";
    return;
  }

  const selecoes = selecoesProdutos[id] || {};
  const tamanhoSelecionado = selecoes.tamanho;
  const corSelecionada = selecoes.cor;

  const produtoOriginal = produtos.find((p) => p.id == id);
  if (produtoOriginal) {
    // Validação para garantir que tamanho e cor foram selecionados
    if (
      produtoOriginal.tamanhos &&
      produtoOriginal.tamanhos.length > 0 &&
      !tamanhoSelecionado
    ) {
      exibirToast("Por favor, selecione um tamanho.");
      return;
    }
    if (
      produtoOriginal.cores &&
      produtoOriginal.cores.length > 0 &&
      !corSelecionada
    ) {
      exibirToast("Por favor, selecione uma cor.");
      return;
    }

    const produtoParaCarrinho = {
      ...produtoOriginal,
    };
    if (produtoParaCarrinho.desconto && produtoParaCarrinho.precoOriginal) {
      produtoParaCarrinho.preco =
        produtoParaCarrinho.precoOriginal *
        (1 - produtoParaCarrinho.desconto / 100);
    }

    // Um item é único pela combinação de id, tamanho e cor
    let item = carrinho.find(
      (p) =>
        p.id == id &&
        p.tamanho === tamanhoSelecionado &&
        p.cor?.nome === corSelecionada?.nome
    );
    if (item) {
      item.quantidade += 1;
    } else {
      carrinho.push({
        ...produtoParaCarrinho,
        quantidade: 1,
        tamanho: tamanhoSelecionado,
        cor: corSelecionada,
      });
    }
    salvarCarrinho();
    atualizarBadgeCarrinho();
    exibirToast(`${produtoParaCarrinho.nome} foi adicionado ao carrinho!`);
    fecharModalDetalhes();
  }
}

function atualizarBadgeCarrinho() {
  const badge = document.querySelector("#carrinhoContainer .badge");
  if (badge)
    badge.textContent = carrinho.reduce((acc, p) => acc + p.quantidade, 0);
}

// === Funções do modal do carrinho ===
function renderizarCarrinho() {
  const listaCarrinho = document.getElementById("listaCarrinho");
  const totalCarrinho = document.getElementById("totalCarrinho");
  const btnFinalizar = document.getElementById("btnFinalizar");

  listaCarrinho.innerHTML = "";
  let total = 0;

  if (carrinho.length === 0) {
    listaCarrinho.innerHTML = "<p>Seu carrinho está vazio.</p>";
    totalCarrinho.textContent = "";
    btnFinalizar.style.display = "none";
    return;
  }

  carrinho.forEach((produto) => {
    const subtotal = produto.preco * produto.quantidade;
    total += subtotal;

    const item = document.createElement("div");
    item.classList.add("item-carrinho");
    item.innerHTML = `
      <img src="${produto.imagem}" alt="${produto.nome}">
      <div class="info">
        <span class="nome-item">${produto.nome}</span>
        ${
          produto.tamanho
            ? `<span class="detalhe-item">Tamanho: ${produto.tamanho}</span>`
            : ""
        }
        ${
          produto.cor
            ? `<span class="detalhe-item">Cor: ${produto.cor.nome}</span>`
            : ""
        }
        <span class="preco-item">${formatarMoeda(produto.preco)}</span>
      </div>
      <div class="quantidade-controle">
        <button onclick="mudarQuantidade(${produto.id}, -1, '${
      produto.tamanho
    }', '${produto.cor?.nome}')">-</button>
        <span>${produto.quantidade}</span>
        <button onclick="mudarQuantidade(${produto.id}, 1, '${
      produto.tamanho
    }', '${produto.cor?.nome}')">+</button>
      </div>
      <button class="remover-item" onclick="removerItem(${produto.id}, '${
      produto.tamanho
    }', '${produto.cor?.nome}')">
        <i class="fa-solid fa-trash-can"></i>
      </button>
    `;
    listaCarrinho.appendChild(item);
  });

  totalCarrinho.textContent = `Total: ${formatarMoeda(total)}`;
  btnFinalizar.style.display = "block";
}

function mudarQuantidade(id, valor, tamanho, corNome) {
  let item = carrinho.find(
    (p) => p.id === id && p.tamanho === tamanho && p.cor?.nome === corNome
  );
  if (item) {
    item.quantidade += valor;
    if (item.quantidade <= 0) {
      removerItem(id, tamanho, corNome);
    } else {
      salvarCarrinho();
      renderizarCarrinho();
      atualizarBadgeCarrinho();
    }
  }
}

function removerItem(id, tamanho, corNome) {
  carrinho = carrinho.filter(
    (p) => !(p.id === id && p.tamanho === tamanho && p.cor?.nome === corNome)
  );
  salvarCarrinho();
  renderizarCarrinho();
  atualizarBadgeCarrinho();
}

function abrirCarrinho() {
  let logado = localStorage.getItem("logado");
  if (logado !== "true") {
    modal.style.display = "flex";
    return;
  }
  renderizarCarrinho();
  modalCarrinho.style.display = "flex";
}

function fecharCarrinho() {
  modalCarrinho.style.display = "none";
}

function finalizarCompra() {
  if (carrinho.length === 0) {
    alert("Seu carrinho está vazio!");
    return;
  }

  carrinho = [];
  salvarCarrinho();
  atualizarBadgeCarrinho();
  fecharCarrinho();

  exibirBannerMensagem("Obrigado pela compra! 🎉");
}

// ================= EXIBIR PRODUTOS =================
let produtosVisiveis = [...produtos];

function mostrarProdutos(listaProdutos, mostrarOriginal = false) {
  let htmlProdutos = "";
  let produtosCurtidos = [];
  if (localStorage.getItem("logado") === "true") {
    const user = JSON.parse(localStorage.getItem("user"));
    const curtidas =
      JSON.parse(localStorage.getItem("curtidas_" + user.email)) || {};
    produtosCurtidos = Object.keys(curtidas);
  }

  if (listaProdutos.length === 0) {
    htmlProdutos = `<p style="text-align:center; width:100%">Nenhum produto encontrado.</p>`;
  } else {
    listaProdutos.forEach((prd) => {
      let precoHtml;

      if (
        mostrarOriginal &&
        prd.desconto !== null &&
        prd.precoOriginal !== null
      ) {
        const precoAtual = prd.precoOriginal * (1 - prd.desconto / 100);
        precoHtml = `
          <span class="preco-original">${formatarMoeda(
            prd.precoOriginal
          )}</span>
          <span class="preco-atual">${formatarMoeda(precoAtual)}</span>
        `;
      } else {
        const precoAtual =
          prd.desconto !== null
            ? prd.precoOriginal * (1 - prd.desconto / 100)
            : prd.preco;
        precoHtml = `<span class="preco-atual">${formatarMoeda(
          precoAtual
        )}</span>`;
      }

      const badgeDesconto =
        prd.desconto !== null
          ? `<div class="desconto-badge">${prd.desconto}% OFF</div>`
          : "";
      const isCurtido = produtosCurtidos.includes(prd.id.toString());
      const classeCoracao = isCurtido ? "fa-solid" : "fa-regular";

      // Gerar seletores de tamanho
      const tamanhosHtml = prd.tamanhos
        ? prd.tamanhos
            .map(
              (tamanho) =>
                `<span class="tamanho-option" onclick="selecionarTamanho(${prd.id}, '${tamanho}')">${tamanho}</span>`
            )
            .join("")
        : "";

      // Gerar seletores de cor
      const coresHtml = prd.cores
        ? prd.cores
            .map(
              (cor) =>
                `<span class="cor-option" onclick="selecionarCor(${prd.id}, '${cor.nome}', '${cor.codigo}')" style="--cor-produto: ${cor.codigo}" data-imagem="${cor.imagens[0]}"></span>`
            )
            .join("")
        : "";

      htmlProdutos += `
        <div class="cartao-produto" id="produto-${prd.id}">
          ${badgeDesconto}
          <div class="icone-curtida" onclick="gerenciarCurtida(${prd.id})">
            <i class="${classeCoracao} fa-heart"></i>
          </div>
          <img src="${prd.imagem}" class="imagem-produto">
          <div class="galeria-card" id="galeria-card-${prd.id}"></div>
          <div class="info-produto" categoria="${prd.categoria}">
            <h3 class="nome-produto">${prd.nome}</h3>
            <p class="descricao-produto">${prd.descricao}</p>
            <p class="preco-produto">${precoHtml}</p>
            
            <div class="seletores-produto">
              <div class="seletor-tamanho">
                <label>Tamanho:</label>
                <div class="tamanhos-container">
                  ${tamanhosHtml}
                </div>
              </div>
              
              <div class="seletor-cor">
                <label>Cor:</label>
                <div class="cores-container">
                  ${coresHtml}
                </div>
              </div>
            </div>
            
            <div class="botoes-card">
              <button class="botao-produto" onclick="verDetalhes(${prd.id})">Ver Detalhes</button>
              <button class="carrinho-btn-icone" onclick="adicionarAoCarrinho(${prd.id})">
                <i class="fa-solid fa-cart-shopping"></i>
              </button>
            </div>
          </div>
        </div>
      `;
    });
  }
  containerProdutos.innerHTML = htmlProdutos;
}

// ================= CURTIR PRODUTO =================
function gerenciarCurtida(idProduto) {
  if (localStorage.getItem("logado") !== "true") {
    modal.style.display = "flex";
    return;
  }

  const user = JSON.parse(localStorage.getItem("user"));
  const chaveCurtidas = `curtidas_${user.email}`;
  const curtidas = JSON.parse(localStorage.getItem(chaveCurtidas)) || {};

  const iconeElemento = document.querySelector(
    `#produto-${idProduto} .icone-curtida i`
  );

  if (curtidas[idProduto]) {
    delete curtidas[idProduto];
    iconeElemento.classList.remove("fa-solid");
    iconeElemento.classList.add("fa-regular");
  } else {
    curtidas[idProduto] = true;
    iconeElemento.classList.remove("fa-regular");
    iconeElemento.classList.add("fa-solid");
  }

  localStorage.setItem(chaveCurtidas, JSON.stringify(curtidas));
  atualizarContadorCurtidas();
  aplicarFiltrosEOrdenacao();
}

function atualizarContadorCurtidas() {
  const badge = document.querySelector("#curtidasContainer .badge");
  if (!badge) return;

  if (localStorage.getItem("logado") !== "true") {
    badge.textContent = 0;
    return;
  }

  const user = JSON.parse(localStorage.getItem("user"));
  const chaveCurtidas = `curtidas_${user.email}`;
  const curtidas = JSON.parse(localStorage.getItem(chaveCurtidas)) || {};
  const numeroCurtidas = Object.keys(curtidas).length;
  badge.textContent = numeroCurtidas;
}

// ================= FILTRO POR CATEGORIA =================
const nav = [
  {
    id: "btnNav",
    categoria: "all",
  },
  {
    id: "btnOfertas",
    categoria: "ofertas",
  },
  {
    id: "btnLancamentos",
    categoria: "lancamentos",
  },
  {
    id: "btnMasculino",
    categoria: "masculino",
  },
  {
    id: "btnFeminino",
    categoria: "feminino",
  },
  {
    id: "btnInfantil",
    categoria: "infantil",
  },
];

// ================= SELEÇÃO DE TAMANHO E COR =================
let selecoesProdutos = {};

function selecionarTamanho(idProduto, tamanho) {
  if (!selecoesProdutos[idProduto]) {
    selecoesProdutos[idProduto] = {};
  }

  const container = document.querySelector(
    `#produto-${idProduto} .tamanhos-container`
  );
  const opcaoClicada = container.querySelector(
    `[onclick="selecionarTamanho(${idProduto}, '${tamanho}')"]`
  );

  // Verifica se o tamanho clicado já está selecionado
  if (selecoesProdutos[idProduto].tamanho === tamanho) {
    // Desseleciona o tamanho
    opcaoClicada.classList.remove("selected");
    delete selecoesProdutos[idProduto].tamanho;
    return; // Finaliza a função
  }

  // Lógica para selecionar um novo tamanho
  // Remove seleção anterior de outros botões
  container.querySelectorAll(".tamanho-option").forEach((option) => {
    option.classList.remove("selected");
  });

  // Adiciona seleção atual
  if (opcaoClicada) {
    opcaoClicada.classList.add("selected");
    selecoesProdutos[idProduto].tamanho = tamanho;
  }
}

function selecionarCor(idProduto, nomeCor, codigoCor) {
  if (!selecoesProdutos[idProduto]) {
    selecoesProdutos[idProduto] = {};
  }

  const container = document.querySelector(
    `#produto-${idProduto} .cores-container`
  );
  const opcaoClicada = container.querySelector(
    `[onclick="selecionarCor(${idProduto}, '${nomeCor}', '${codigoCor}')"]`
  );
  const produto = produtos.find((p) => p.id === idProduto);
  const imagemProdutoEl = document.querySelector(
    `#produto-${idProduto} .imagem-produto`
  );
  const galeriaCardEl = document.getElementById(`galeria-card-${idProduto}`);

  // Verifica se a cor clicada já está selecionada
  if (
    selecoesProdutos[idProduto].cor &&
    selecoesProdutos[idProduto].cor.nome === nomeCor
  ) {
    // Desseleciona a cor
    opcaoClicada.classList.remove("selected");
    delete selecoesProdutos[idProduto].cor;

    // Reverte para a imagem padrão e limpa a galeria
    if (produto && imagemProdutoEl) {
      imagemProdutoEl.src = produto.imagem;
    }
    if (galeriaCardEl) {
      galeriaCardEl.innerHTML = "";
    }
    return; // Finaliza a função
  }

  // Lógica para selecionar uma nova cor (comportamento antigo)
  // Remove seleção anterior
  container.querySelectorAll(".cor-option").forEach((option) => {
    option.classList.remove("selected");
  });

  // Adiciona seleção atual
  if (opcaoClicada) {
    opcaoClicada.classList.add("selected");
    selecoesProdutos[idProduto].cor = { nome: nomeCor, codigo: codigoCor };

    // Trocar imagem do produto
    if (produto) {
      const corSelecionada = produto.cores.find((cor) => cor.nome === nomeCor);

      if (corSelecionada && imagemProdutoEl && galeriaCardEl) {
        let imagensDaCor = [];
        if (corSelecionada.imagens && corSelecionada.imagens.length > 0) {
          imagensDaCor = corSelecionada.imagens;
        } else if (corSelecionada.imagem) {
          imagensDaCor = [corSelecionada.imagem];
        }

        if (imagensDaCor.length > 0) {
          // Define a primeira imagem como a principal
          imagemProdutoEl.src = imagensDaCor[0];

          // Gera as miniaturas
          galeriaCardEl.innerHTML = imagensDaCor
            .map(
              (img, index) => `
            <img 
              src="${img}" 
              class="galeria-card-thumbnail ${index === 0 ? "active" : ""}" 
              onclick="mudarImagemPrincipal(${idProduto}, '${img}', this)"
            >
          `
            )
            .join("");
        }
      }
    }
  }
}

function mudarImagemPrincipal(idProduto, urlImagem, thumbnailEl) {
  const imagemProdutoEl = document.querySelector(
    `#produto-${idProduto} .imagem-produto`
  );
  if (imagemProdutoEl) {
    imagemProdutoEl.src = urlImagem;

    // Atualiza a classe 'active' na miniatura
    const galeria = thumbnailEl.parentElement;
    galeria
      .querySelectorAll(".galeria-card-thumbnail")
      .forEach((thumb) => thumb.classList.remove("active"));
    thumbnailEl.classList.add("active");
  }
}

nav.forEach((item) => {
  const botao = document.getElementById(item.id);
  if (!botao) return;

  botao.addEventListener("click", function () {
    const botoes = document.querySelectorAll(".botao-categorias");
    botoes.forEach((btn) => btn.classList.remove("ativo"));
    this.classList.add("ativo");

    if (item.categoria === "all") {
      produtosVisiveis = [...produtos];
    } else if (item.categoria === "ofertas") {
      produtosVisiveis = produtos.filter((prd) => prd.desconto !== null);
    } else if (item.categoria === "lancamentos") {
      // Simular lançamentos - produtos com desconto alto
      produtosVisiveis = produtos.filter(
        (prd) => prd.desconto && prd.desconto >= 20
      );
    } else if (item.categoria === "masculino") {
      produtosVisiveis = produtos.filter((prd) => prd.genero === "Masculino");
    } else if (item.categoria === "feminino") {
      produtosVisiveis = produtos.filter((prd) => prd.genero === "Feminino");
    } else if (item.categoria === "infantil") {
      produtosVisiveis = produtos.filter((prd) => prd.genero === "Infantil");
    } else {
      produtosVisiveis = produtos.filter(
        (prd) => prd.categoria === item.categoria
      );
    }

    if (meuSlider) {
      meuSlider.value = meuSlider.max;
      valorExibido.textContent = formatarMoeda(meuSlider.max);
    }

    if (ordenacao) {
      ordenacao.value = "default";
    }
    aplicarFiltrosEOrdenacao();
  });
});

// ================= FUNCIONALIDADE DOS SUBMENUS DE MARCAS =================
function configurarSubmenusMarcas() {
  // Configurar botões de marcas horizontais
  for (let i = 1; i <= 6; i++) {
    const btnMarca = document.getElementById(`btnMarca${i}`);
    const submenu = document.getElementById(`submenuMarca${i}`);

    if (btnMarca && submenu) {
      btnMarca.addEventListener("click", function (e) {
        e.stopPropagation();

        // Fechar outros submenus
        document
          .querySelectorAll(".submenu-marca-horizontal")
          .forEach((menu) => {
            if (menu !== submenu) {
              menu.classList.remove("show");
            }
          });

        // Remover classe active de outros botões
        document.querySelectorAll(".botao-marca-horizontal").forEach((btn) => {
          if (btn !== btnMarca) {
            btn.classList.remove("active");
          }
        });

        // Toggle do submenu atual
        submenu.classList.toggle("show");
        btnMarca.classList.toggle("active");
      });
    }
  }

  // Configurar links dos submenus
  document.querySelectorAll(".submenu-link").forEach((link) => {
    link.addEventListener("click", function (e) {
      e.preventDefault();
      const filtro = this.getAttribute("data-filtro");

      // Fechar todos os submenus
      document.querySelectorAll(".submenu-marca-horizontal").forEach((menu) => {
        menu.classList.remove("show");
      });

      // Remover classe active de todos os botões
      document.querySelectorAll(".botao-marca-horizontal").forEach((btn) => {
        btn.classList.remove("active");
      });

      // Remover classe ativo de todos os botões de categoria
      document.querySelectorAll(".botao-categorias").forEach((btn) => {
        btn.classList.remove("ativo");
      });

      // Filtrar produtos
      produtosVisiveis = produtos.filter(
        (prd) => prd.categoria.toLowerCase() === filtro.toLowerCase()
      );

      // Em telas menores, fecha o menu lateral de categorias
      if (window.innerWidth <= 768) {
        navCategorias.classList.remove("show");
      }

      aplicarFiltrosEOrdenacao();
    });
  });
}

// ================= PRODUTOS COM DESCONTO =================
function mostrarOferta() {
  const produtosComDescontos = produtos.filter((prd) => prd.desconto !== null);
  produtosVisiveis = [...produtosComDescontos];

  aplicarFiltrosEOrdenacao(true);

  const botoes = document.querySelectorAll(".botao-categorias");
  botoes.forEach((btn) => btn.classList.remove("ativo"));
  const buttonOffer = document.querySelector("#buttonOffer");
  if (buttonOffer) {
    buttonOffer.classList.add("ativo");
  }
}

const buttonOffer = document.querySelector("#buttonOffer");
if (buttonOffer) {
  buttonOffer.addEventListener("click", mostrarOferta);
}

// ================= BUSCA =================
const buscarProdutoInput = document.getElementById("buscarProduto");
const buscarProdutoBtn = document.querySelector(".fa-magnifying-glass");

if (buscarProdutoInput) {
  buscarProdutoInput.addEventListener("input", function () {
    const termoBusca = this.value.toLowerCase();
    produtosVisiveis = produtos.filter(
      (prd) =>
        prd.nome.toLowerCase().includes(termoBusca) ||
        prd.descricao.toLowerCase().includes(termoBusca)
    );
    aplicarFiltrosEOrdenacao();
  });
}

if (buscarProdutoBtn) {
  buscarProdutoBtn.addEventListener("click", function () {
    const termoBusca = buscarProdutoInput.value.toLowerCase();
    produtosVisiveis = produtos.filter(
      (prd) =>
        prd.nome.toLowerCase().includes(termoBusca) ||
        prd.descricao.toLowerCase().includes(termoBusca)
    );
    aplicarFiltrosEOrdenacao();
  });
}

// ================= LOGIN / CADASTRO =================
const modal = document.getElementById("userModal");
const closeModal = document.getElementById("closeModal");
const loginArea = document.getElementById("loginArea");
const cadastroArea = document.getElementById("cadastroArea");
const successMsg = document.getElementById("successMsg");
const usuarioContainer = document.getElementById("usuarioContainer");

function configurarEventosLoginECadastro() {
  const btnUsuario = document.getElementById("usuario");
  if (btnUsuario) {
    btnUsuario.onclick = () => (modal.style.display = "flex");
  }

  const btnCarrinho = document.getElementById("carrinho");
  if (btnCarrinho) {
    btnCarrinho.addEventListener("click", abrirCarrinho);
  }

  const btnCurtidas = document.getElementById("curtidas");
  if (btnCurtidas) {
    btnCurtidas.addEventListener("click", mostrarProdutosCurtidos);
  }

  if (closeModal) {
    closeModal.onclick = () => (modal.style.display = "none");
  }

  const loginBtn = document.getElementById("loginBtn");
  if (loginBtn) {
    loginBtn.addEventListener("click", login);
  }

  const showCadastroBtn = document.getElementById("showCadastroBtn");
  if (showCadastroBtn) {
    showCadastroBtn.addEventListener("click", showCadastro);
  }

  const salvarCadastroBtn = document.getElementById("cadastrarBtn");
  if (salvarCadastroBtn) {
    salvarCadastroBtn.addEventListener("click", salvarCadastro);
  }

  const logoutBtn = document.getElementById("logoutBtn");
  if (logoutBtn) {
    logoutBtn.addEventListener("click", logout);
  }

  const fecharCarrinhoBtn = document.getElementById("fecharCarrinho");
  if (fecharCarrinhoBtn) {
    fecharCarrinhoBtn.addEventListener("click", fecharCarrinho);
  }

  const finalizarCompraBtn = document.getElementById("btnFinalizar");
  if (finalizarCompraBtn) {
    finalizarCompraBtn.addEventListener("click", finalizarCompra);
  }

  const fecharDetalhesBtn = document.getElementById("fecharDetalhesBtn");
  if (fecharDetalhesBtn) {
    fecharDetalhesBtn.onclick = fecharModalDetalhes;
  }
}

function showCadastro() {
  loginArea.style.display = "none";
  cadastroArea.style.display = "block";
  successMsg.style.display = "none";
}

function salvarCadastro() {
  let nome = document.getElementById("cadNome").value;
  let email = document.getElementById("cadEmail").value;
  let senha = document.getElementById("cadSenha").value;

  if (nome && email && senha) {
    localStorage.setItem(
      "user",
      JSON.stringify({
        nome,
        email,
        senha,
      })
    );
    successMsg.style.display = "block";

    setTimeout(() => {
      cadastroArea.style.display = "none";
      loginArea.style.display = "block";
      successMsg.style.display = "none";
    }, 2000);
  } else {
    alert("Preencha todos os campos!");
  }
}

function mostrarIconesPadrao() {
  usuarioContainer.innerHTML = `
        <button id="usuario"><i class="fa-solid fa-user"></i></button>
        <div class="cart" id="carrinhoContainer">
            <button id="carrinho"><i class="fa-solid fa-cart-shopping"></i><span class="badge">0</span></button>
        </div>
        <div class="curtidasContainer" id="curtidasContainer">
            <button id="curtidas"><i class="fa-solid fa-heart"></i><span class="badge">0</span></button>
        </div>
    `;
  configurarEventosLoginECadastro();
  atualizarBadgeCarrinho();
  atualizarContadorCurtidas();
}

function login() {
  let email = document.getElementById("loginEmail").value;
  let senha = document.getElementById("loginSenha").value;
  let user = JSON.parse(localStorage.getItem("user"));

  if (user && email === user.email && senha === user.senha) {
    modal.style.display = "none";
    mostrarBemVindo(user.nome);
    localStorage.setItem("logado", "true");
    aplicarFiltrosEOrdenacao();
    atualizarContadorCurtidas();
  } else {
    alert("Usuário ou senha incorretos!");
  }
}

function mostrarBemVindo(nome) {
  usuarioContainer.innerHTML = `
        <span class="bem-vindo">Bem-vindo, ${nome}!</span>
        <button class="logout-btn" id="logoutBtn"><i class="fa-solid fa-arrow-right-from-bracket"></i></button>
        <div class="cart" id="carrinhoContainer">
            <button id="carrinho"><i class="fa-solid fa-cart-shopping"></i><span class="badge">0</span></button>
        </div>
        <div class="curtidasContainer" id="curtidasContainer">
            <button id="curtidas"><i class="fa-solid fa-heart"></i><span class="badge">0</span></button>
        </div>
    `;
  configurarEventosLoginECadastro();
  atualizarBadgeCarrinho();
  atualizarContadorCurtidas();
}

function logout() {
  localStorage.removeItem("logado");
  carrinho = [];
  salvarCarrinho();
  mostrarIconesPadrao();
  atualizarBadgeCarrinho();
  aplicarFiltrosEOrdenacao();
}

// ================= BANNER DE MENSAGEM =================
function exibirBannerMensagem(texto) {
  const banner = document.createElement("div");
  banner.classList.add("banner-mensagem");
  banner.textContent = texto;

  document.body.prepend(banner);

  setTimeout(() => {
    banner.classList.add("fade-out");
    setTimeout(() => banner.remove(), 500);
  }, 3000);
}

// ================= TOAST NOTIFICATION =================
function exibirToast(mensagem) {
  const toast = document.getElementById("toast");
  if (toast) {
    toast.textContent = mensagem;
    toast.classList.add("show");
    setTimeout(() => {
      toast.classList.remove("show");
    }, 3000);
  }
}

// ================== MODAL DETALHES ==================
const modalDetalhes = document.getElementById("modalDetalhes");
const detalhesImagemPrincipal = document.getElementById(
  "detalhesImagemPrincipal"
);
const detalhesGaleria = document.getElementById("detalhesGaleria");
const detalhesNome = document.getElementById("detalhesNome");
const detalhesDescricao = document.getElementById("detalhesDescricao");
const detalhesPreco = document.getElementById("detalhesPreco");
const btnAdicionarModal = document.getElementById("btnAdicionarModal");

function verDetalhes(idProduto) {
  const produto = produtos.find((p) => p.id === idProduto);
  if (!produto) return;

  let imagensParaMostrar = produto.imagensDetalhes || [produto.imagem]; // Imagens padrão
  const selecaoAtual = selecoesProdutos[idProduto];

  // Verifica se uma cor foi selecionada no card
  if (selecaoAtual && selecaoAtual.cor) {
    const corInfo = produto.cores.find((c) => c.nome === selecaoAtual.cor.nome);
    if (corInfo) {
      // Usa as imagens da cor, se existirem
      if (corInfo.imagens && corInfo.imagens.length > 0) {
        imagensParaMostrar = corInfo.imagens;
      } else if (corInfo.imagem) {
        imagensParaMostrar = [corInfo.imagem];
      }
    }
  }

  detalhesImagemPrincipal.src = imagensParaMostrar[0];
  detalhesGaleria.innerHTML = "";

  imagensParaMostrar.forEach((img, index) => {
    const imgEl = document.createElement("img");
    imgEl.src = img;
    imgEl.alt = `Miniatura ${index + 1} de ${produto.nome}`;
    if (index === 0) {
      imgEl.classList.add("active");
    }
    imgEl.onclick = () => {
      detalhesImagemPrincipal.src = img;
      document
        .querySelectorAll("#detalhesGaleria img")
        .forEach((el) => el.classList.remove("active"));
      imgEl.classList.add("active");
    };
    detalhesGaleria.appendChild(imgEl);
  });

  detalhesNome.textContent = produto.nome;
  detalhesDescricao.textContent = produto.descricao;

  let precoExibido = produto.preco;
  if (produto.desconto && produto.precoOriginal) {
    precoExibido = produto.precoOriginal * (1 - produto.desconto / 100);
  }
  detalhesPreco.innerHTML = `${formatarMoeda(precoExibido)}`;

  // Remove seletores antigos para evitar duplicação
  const colunaInfo = document.querySelector(
    "#modalDetalhes .detalhes-coluna-info"
  );
  const seletoresAntigos = colunaInfo.querySelector(".seletores-produto");
  if (seletoresAntigos) {
    seletoresAntigos.remove();
  }
  // Adicionar seletores de tamanho e cor no modal
  const seletoresModal = document.createElement("div");
  seletoresModal.className = "seletores-produto";
  seletoresModal.innerHTML = `
    <div class="seletor-tamanho">
      <label>Tamanho:</label>
      <div class="tamanhos-container">
        ${
          produto.tamanhos
            ? produto.tamanhos
                .map(
                  (tamanho) =>
                    `<span class="tamanho-option" onclick="selecionarTamanhoModal(${produto.id}, '${tamanho}')">${tamanho}</span>`
                )
                .join("")
            : ""
        }
      </div>
    </div>
    
    <div class="seletor-cor">
      <label>Cor:</label>
      <div class="cores-container">
        ${
          produto.cores
            ? produto.cores
                .map(
                  (cor) =>
                    `<span class="cor-option" onclick="selecionarCorModal(${produto.id}, '${cor.nome}', '${cor.codigo}')" style="--cor-produto: ${cor.codigo}" data-imagem="${cor.imagens[0]}"></span>`
                )
                .join("")
            : ""
        }
      </div>
    </div>
  `;

  // Inserir seletores antes do botão
  const btnAdicionar = colunaInfo.querySelector("#btnAdicionarModal");
  colunaInfo.insertBefore(seletoresModal, btnAdicionar);

  if (btnAdicionarModal) {
    btnAdicionarModal.onclick = () => {
      let logado = localStorage.getItem("logado") === "true";
      if (logado) {
        adicionarAoCarrinho(produto.id);
      } else {
        fecharModalDetalhes();
        modal.style.display = "flex";
      }
    };
  }

  modalDetalhes.style.display = "flex";
}

// Funções para seleção no modal
function selecionarTamanhoModal(idProduto, tamanho) {
  if (!selecoesProdutos[idProduto]) {
    selecoesProdutos[idProduto] = {};
  }

  const container = document.querySelector(
    "#modalDetalhes .tamanhos-container"
  );
  const opcaoClicada = container.querySelector(
    `[onclick="selecionarTamanhoModal(${idProduto}, '${tamanho}')"]`
  );

  // Verifica se o tamanho clicado já está selecionado
  if (selecoesProdutos[idProduto].tamanho === tamanho) {
    // Desseleciona o tamanho
    opcaoClicada.classList.remove("selected");
    delete selecoesProdutos[idProduto].tamanho;
  } else {
    // Lógica para selecionar um novo tamanho
    container.querySelectorAll(".tamanho-option").forEach((option) => {
      option.classList.remove("selected");
    });

    opcaoClicada.classList.add("selected");
    selecoesProdutos[idProduto].tamanho = tamanho;
  }
}

function selecionarCorModal(idProduto, nomeCor, codigoCor) {
  selecionarCor(idProduto, nomeCor, codigoCor);

  // Atualiza a galeria de imagens no modal
  const produto = produtos.find((p) => p.id === idProduto);
  const selecaoAtual = selecoesProdutos[idProduto];
  let imagensParaMostrar = produto.imagensDetalhes || [produto.imagem];

  if (selecaoAtual && selecaoAtual.cor) {
    const corInfo = produto.cores.find((c) => c.nome === selecaoAtual.cor.nome);
    if (corInfo) {
      if (corInfo.imagens && corInfo.imagens.length > 0) {
        imagensParaMostrar = corInfo.imagens;
      } else if (corInfo.imagem) {
        imagensParaMostrar = [corInfo.imagem];
      }
    }
  }

  detalhesImagemPrincipal.src = imagensParaMostrar[0];
  detalhesGaleria.innerHTML = ""; // Limpa a galeria

  imagensParaMostrar.forEach((img, index) => {
    const imgEl = document.createElement("img");
    imgEl.src = img;
    if (index === 0) {
      imgEl.classList.add("active");
    }
    imgEl.onclick = () => {
      detalhesImagemPrincipal.src = img;
      // Remove a classe 'active' de todas as miniaturas e adiciona na clicada
      document
        .querySelectorAll("#detalhesGaleria img")
        .forEach((el) => el.classList.remove("active"));
      imgEl.classList.add("active");
    };
    detalhesGaleria.appendChild(imgEl);
  });
}

function fecharModalDetalhes() {
  modalDetalhes.style.display = "none";
}

window.addEventListener("click", (e) => {
  if (e.target === modalDetalhes) {
    fecharModalDetalhes();
  }
  if (e.target === modalCarrinho) {
    fecharCarrinho();
  }
  if (e.target === modal) {
    modal.style.display = "none";
  }
});

// ================= PRODUTOS CURTIDOS =================
function mostrarProdutosCurtidos() {
  const logado = localStorage.getItem("logado") === "true";
  if (!logado) {
    modal.style.display = "flex";
    return;
  }

  const user = JSON.parse(localStorage.getItem("user"));
  const chaveCurtidas = `curtidas_${user.email}`;
  const curtidas = JSON.parse(localStorage.getItem(chaveCurtidas)) || {};
  const idsCurtidos = Object.keys(curtidas).map(Number);

  produtosVisiveis = produtos.filter((prd) => idsCurtidos.includes(prd.id));

  aplicarFiltrosEOrdenacao();

  const botoes = document.querySelectorAll(".botao-categorias");
  botoes.forEach((btn) => btn.classList.remove("ativo"));
}

// ================= SLIDER E ORDENAÇÃO =================
const meuSlider = document.getElementById("meuSlider");
const valorExibido = document.getElementById("valorExibido");
const ordenacao = document.getElementById("ordenacao");

// Funções para pegar os valores do slider e ordenação
function getPrecoMaximo() {
  return parseFloat(meuSlider.value);
}

function getTipoOrdenacao() {
  return ordenacao.value;
}

// Função unificada para aplicar todos os filtros
function aplicarFiltrosEOrdenacao(mostrarOriginal = false) {
  let produtosParaExibir = [...produtosVisiveis];

  const precoMaximo = getPrecoMaximo();
  produtosParaExibir = produtosParaExibir.filter((produto) => {
    const precoReal =
      produto.precoOriginal && produto.desconto
        ? produto.precoOriginal * (1 - produto.desconto / 100)
        : produto.preco;
    return precoReal <= precoMaximo;
  });

  const tipoOrdenacao = getTipoOrdenacao();
  switch (tipoOrdenacao) {
    case "nome-asc":
      produtosParaExibir.sort((a, b) => a.nome.localeCompare(b.nome));
      break;
    case "nome-desc":
      produtosParaExibir.sort((a, b) => b.nome.localeCompare(a.nome));
      break;
    case "valor-asc":
      produtosParaExibir.sort((a, b) => {
        const precoA =
          a.precoOriginal && a.desconto
            ? a.precoOriginal * (1 - a.desconto / 100)
            : a.preco;
        const precoB =
          b.precoOriginal && b.desconto
            ? b.precoOriginal * (1 - b.desconto / 100)
            : b.preco;
        return precoA - precoB;
      });
      break;
    case "valor-desc":
      produtosParaExibir.sort((a, b) => {
        const precoA =
          a.precoOriginal && a.desconto
            ? a.precoOriginal * (1 - a.desconto / 100)
            : a.preco;
        const precoB =
          b.precoOriginal && b.desconto
            ? b.precoOriginal * (1 - b.desconto / 100)
            : b.preco;
        return precoB - precoA;
      });
      break;
  }

  mostrarProdutos(produtosParaExibir, mostrarOriginal);
}

// Configuração inicial do slider e eventos
if (meuSlider && valorExibido) {
  valorExibido.textContent = formatarMoeda(meuSlider.value);
  meuSlider.addEventListener("input", function () {
    valorExibido.textContent = formatarMoeda(this.value);

    if (ordenacao) {
      ordenacao.value = "default";
    }
  });
  meuSlider.addEventListener("change", aplicarFiltrosEOrdenacao);
}

if (ordenacao) {
  ordenacao.addEventListener("change", aplicarFiltrosEOrdenacao);
}

// ================= AO CARREGAR =================
window.onload = () => {
  let user = JSON.parse(localStorage.getItem("user"));
  let logado = localStorage.getItem("logado");

  configurarEventosLoginECadastro();
  configurarSubmenusMarcas();

  if (user && logado === "true") {
    mostrarBemVindo(user.nome);
  } else {
    mostrarIconesPadrao();
  }

  aplicarFiltrosEOrdenacao();

  atualizarBadgeCarrinho();
  atualizarContadorCurtidas();
};
// Seleciona o botão do hambúrguer e o menu de navegação
const btnHamburguerCategorias = document.getElementById(
  "btnHamburguerCategorias"
);
const navCategorias = document.getElementById("nav-categorias");

// Seleciona todos os botões de categoria dentro do menu
const botoesCategorias = document.querySelectorAll(".botao-categorias");

// Evento para abrir/fechar o menu ao clicar no botão do hambúrguer
btnHamburguerCategorias.addEventListener("click", () => {
  navCategorias.classList.toggle("show");
});

// Evento para fechar o menu ao clicar em qualquer botão de categoria
botoesCategorias.forEach((botao) => {
  botao.addEventListener("click", () => {
    navCategorias.classList.remove("show");
  });
});
