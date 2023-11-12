create table credit_cards (
  id serial,
  description varchar(255),
  limit_card decimal(10, 2),
  observation varchar(255)
);
ALTER TABLE credit_cards ADD PRIMARY KEY (id);

create table category (
  id serial,
  description varchar(255),
  limit_category decimal(10, 2),
  observation varchar(255)
);
ALTER TABLE category ADD PRIMARY KEY (id);

create table movimentations (
  id serial primary key,
  data date,
  type varchar(2),
  valor decimal(10, 2),
  id_credit_card integer,
  id_category integer,
  observacao varchar(255)
);

CREATE TABLE mounths (
  id INTEGER,
  description VARCHAR(20)
);

alter table movimentations
add constraint fk_movimentacoes_credit_card
foreign key (id_credit_card)
references credit_cards(id);

alter table movimentations
add constraint fk_movimentacoes_category
foreign key (id_category)
references category(id);

INSERT INTO mounths (id, description) VALUES
(1, 'Janeiro'),
(2, 'Fevereiro'),
(3, 'Março'),
(4, 'Abril'),
(5, 'Maio'),
(6, 'Junho'),
(7, 'Julho'),
(8, 'Agosto'),
(9, 'Setembro'),
(10, 'Outubro'),
(11, 'Novembro'),
(12, 'Dezembro');