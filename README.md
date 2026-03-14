# 🛒 TypeScript POO E-commerce

![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge\&logo=typescript\&logoColor=white)
![NodeJS](https://img.shields.io/badge/Node.js-339933?style=for-the-badge\&logo=nodedotjs\&logoColor=white)
![POO](https://img.shields.io/badge/Paradigm-OOP-blue?style=for-the-badge)
![Status](https://img.shields.io/badge/status-learning-success?style=for-the-badge)

Projeto desenvolvido para praticar **Programação Orientada a Objetos (POO)** e **tipagem avançada em TypeScript**, simulando a lógica de um sistema de **e-commerce**.

O sistema modela entidades comuns de uma loja virtual como **produtos, categorias, usuários e carrinho de compras**, utilizando boas práticas de organização de código e tipagem forte.

---

# 🎓 Contexto do Projeto

Este projeto foi desenvolvido como parte da **Atividade 2 da Trilha FullStack TIC-HUB 12**, um programa de formação em tecnologia promovido pelo **Instituto Irede**.

O objetivo da trilha é capacitar desenvolvedores nas principais tecnologias utilizadas no desenvolvimento **Full Stack**, através de desafios práticos focados em:

* Programação Orientada a Objetos
* Modelagem de sistemas
* Estruturação de projetos
* Boas práticas de desenvolvimento

🔗 Saiba mais sobre o programa:
https://lnk.bio/institutoirede

📷 Instagram
@institutoired

---

# 🚀 Tecnologias Utilizadas

* **TypeScript**
* **Node.js**
* **Programação Orientada a Objetos**
* **High Order Functions**

---

# 📂 Estrutura do Projeto

```
src
│
├ models
│   ├ Cart.ts
│   ├ CartItem.ts
│   ├ Category.ts
│   ├ Product.ts
│   ├ Role.ts
│   └ User.ts
│
└ index.ts
```

---

# 📦 Modelagem do Sistema

## Category

Representa a categoria de um produto.

```
id
name
```

---

## Product

Representa um produto da loja.

```
id
name
price
category
```

---

## User

Representa um usuário do sistema.

```
id
username
email
role
```

---

## Role

Enum responsável por controlar os papéis de usuário no sistema.

```
ADMIN
CUSTOMER
```

---

## Cart

Responsável pela lógica do carrinho de compras.

### Métodos implementados

```
addItem()
getTotalItems()
getFinalPrice()
```

### Funcionalidades

✔ Soma quantidades de produtos repetidos
✔ Calcula total de itens no carrinho
✔ Calcula valor final da compra

---

# 🔥 Conceitos Aplicados

* Programação Orientada a Objetos
* Tipagem forte com TypeScript
* Uso de `enum`
* Uso de `interfaces`
* High Order Functions (`reduce`, `some`)
* Organização modular do código

---

# ▶️ Como executar o projeto

### 1️⃣ Instalar dependências

```
npm install
```

### 2️⃣ Compilar o projeto

```
npx tsc
```

### 3️⃣ Executar o projeto

```
node dist/index.js
```

---

# 🎯 Objetivo Educacional

Este projeto tem como objetivo reforçar conceitos fundamentais de **engenharia de software**, como:

* Modelagem de domínio
* Tipagem segura
* Estruturação de projetos em TypeScript
* Uso de Git para versionamento

---

# 👨‍💻 Autor

**Thiago Lopes**

Estudante de **Engenharia da Computação**

GitHub
https://github.com/ThiagoLopes-Cloud
