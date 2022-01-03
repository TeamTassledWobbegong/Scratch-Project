SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

CREATE TABLE public.users (
  "_id" serial UNIQUE,
  "username" varchar NOT NULL UNIQUE,
  "password" varchar NOT NULL,
  CONSTRAINT "user_pk" PRIMARY KEY ("_id")
) WITH (
  OIDS=FALSE
);

CREATE TABLE public.stock (
  "_id" serial UNIQUE,
  "name" varchar NOT NULL,
  "quantity" integer NOT NULL,
  "price" integer NOT NULL
) WITH (
  OIDS=FALSE
);

CREATE TABLE public.carts (
  "_id" serial UNIQUE,
  "item_name" varchar NOT NULL,
  "quantity" integer NOT NUll,
  "cart_id" integer NOT NULL,
  CONSTRAINT "cart_pk" PRIMARY KEY ("_id")
) WITH (
  OIDS=FALSE
);

-- CREATE TABLE public.user_carts (
--   "_id" serial UNIQUE,
--   "user_id" serial NOT NULL UNIQUE,
--   "cart_id" serial NOT NUll UNIQUE
-- ) WITH (
--   OIDS=FALSE
-- );


-- ALTER TABLE public.user_carts ADD CONSTRAINT "users_cart_fk0" FOREIGN KEY ("cart_id") REFERENCES  public.carts("_id");
-- ALTER TABLE public.user_carts ADD CONSTRAINT "users_cart_fk1" FOREIGN KEY ("user_id") REFERENCES  public.users("_id");


INSERT INTO public.stock VALUES (1, 'dual croc spoilers', 20, 18);
INSERT INTO public.stock VALUES (2, 'goth crocs', 10, 112);
INSERT INTO public.stock VALUES (3, 'croc spurs', 15, 20);
INSERT INTO public.stock VALUES (4, 'croc flags', 40, 3);
INSERT INTO public.stock VALUES (5, 'croc chains', 20, 15);
INSERT INTO public.stock VALUES (6, 'croc keychain', 25, 10);
INSERT INTO public.stock VALUES (7, 'croc badge', 20, 8);
INSERT INTO public.stock VALUES (8, 'croc sticker', 35, 3);
INSERT INTO public.stock VALUES (9, 'croc hat', 5, 25);

INSERT INTO public.users(username, password) VALUES ('temp', '123');

INSERT INTO public.carts VALUES (1, 'dual croc spoilers', 4, 1);
INSERT INTO public.carts VALUES (2, 'croc spurs', 2, 1);
INSERT INTO public.carts VALUES (3, 'croc chains', 2, 1);

--  INSERT INTO public.user_carts VALUES (1, 1, 1);





