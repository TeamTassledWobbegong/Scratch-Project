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
  "price" integer NOT NULL, 
  "description" varchar,
  "primary_picture" varchar,
  "secondary_picture" varchar,
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


INSERT INTO public.stock VALUES (1, 'dual croc spoilers', 20, 18,'Get the lastest in aerodynamic tech, on the most advanced running shoe ever','../images/dual croc spoilers.jpg','../images/dual croc spoilers2.jpg');
INSERT INTO public.stock VALUES (2, 'goth crocs', 10, 112,`Your parents don/'t get you, and niether do we. Wear your rage on display with Goth Croks`,'../images/goth crocs.jpg','../images/goth crocs2.jpg' );
INSERT INTO public.stock VALUES (3, 'croc spurs', 15, 20,'After a long day on the ranch, slip into something comfortable and familiar, easy to find in the dark', '../images/croc spurs.jpg','../images/croc spurs.jpg');
INSERT INTO public.stock VALUES (4, 'croc flags', 40, 3, 'Show your country pride with these custom order flags', '../images/croc flags.jpg','../images/croc flags.jpg');
INSERT INTO public.stock VALUES (5, 'croc chains', 20, 15, 'Hate how light your shoes are? Want to increase toe strength and street cred at the same time? Buy our Heavy Duty Crok Chains', '../images/croc chains.jpg','../images/croc chains2.jpg');
INSERT INTO public.stock VALUES (6, 'croc keychain', 25, 10, 'The valet will never have to guess your favorite shoe brand when you hand your keys over with this bad boy hanging proudly', '../images/croc keychain.jpg','../images/croc keychain.jpg');
INSERT INTO public.stock VALUES (7, 'croc badge', 20, 8, 'Nothing screams professional like a crok themed ID lanyard', '../images/croc badge.jpg', '../images/croc badge2.jpg');
INSERT INTO public.stock VALUES (8, 'croc sticker', 35, 3,'Want people to know what shoes you love, even while driving? Slap a few of these stickers on your Ferrari and let the know!', '../images/croc sticker.jpg','');
INSERT INTO public.stock VALUES (9, 'croc hat', 5, 25,'We have you covered in Crok from Head to Toe in this sporty cap, Also available as a Trucker Cap, as if you had to ask', '../images/croc hat.jpg','../images/croc hat2.jpg');

INSERT INTO public.users(username, password) VALUES ('temp', '123');

INSERT INTO public.carts VALUES (1, 'dual croc spoilers', 4, 1);
INSERT INTO public.carts VALUES (2, 'croc spurs', 2, 1);
INSERT INTO public.carts VALUES (3, 'croc chains', 2, 1);

--  INSERT INTO public.user_carts VALUES (1, 1, 1);





