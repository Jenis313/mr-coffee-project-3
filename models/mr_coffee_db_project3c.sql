PGDMP         #                y            mr_coffee_db    13.4    13.3     ?           0    0    ENCODING    ENCODING        SET client_encoding = 'UTF8';
                      false            ?           0    0 
   STDSTRINGS 
   STDSTRINGS     (   SET standard_conforming_strings = 'on';
                      false            ?           0    0 
   SEARCHPATH 
   SEARCHPATH     8   SELECT pg_catalog.set_config('search_path', '', false);
                      false            ?           1262    16394    mr_coffee_db    DATABASE     l   CREATE DATABASE mr_coffee_db WITH TEMPLATE = template0 ENCODING = 'UTF8' LOCALE = 'English_Australia.1252';
    DROP DATABASE mr_coffee_db;
                postgres    false            ?            1259    16397    schedule    TABLE     ?   CREATE TABLE public.schedule (
    id bigint NOT NULL,
    username character varying,
    day character varying,
    start_time time without time zone,
    end_time time without time zone
);
    DROP TABLE public.schedule;
       public         heap    postgres    false            ?            1259    16395    schedule_id_seq    SEQUENCE     x   CREATE SEQUENCE public.schedule_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 &   DROP SEQUENCE public.schedule_id_seq;
       public          postgres    false    201            ?           0    0    schedule_id_seq    SEQUENCE OWNED BY     C   ALTER SEQUENCE public.schedule_id_seq OWNED BY public.schedule.id;
          public          postgres    false    200            #           2604    16400    schedule id    DEFAULT     j   ALTER TABLE ONLY public.schedule ALTER COLUMN id SET DEFAULT nextval('public.schedule_id_seq'::regclass);
 :   ALTER TABLE public.schedule ALTER COLUMN id DROP DEFAULT;
       public          postgres    false    201    200    201            ?          0    16397    schedule 
   TABLE DATA           K   COPY public.schedule (id, username, day, start_time, end_time) FROM stdin;
    public          postgres    false    201   ?
       ?           0    0    schedule_id_seq    SEQUENCE SET     >   SELECT pg_catalog.setval('public.schedule_id_seq', 19, true);
          public          postgres    false    200            %           2606    16402    schedule schedule_pkey 
   CONSTRAINT     T   ALTER TABLE ONLY public.schedule
    ADD CONSTRAINT schedule_pkey PRIMARY KEY (id);
 @   ALTER TABLE ONLY public.schedule DROP CONSTRAINT schedule_pkey;
       public            postgres    false    201            ?   p   x?-??1Cg?cPҢC??@ba	J?c(?????^%????]???Ka??NCo?[4ݐ 3??Y?ý{??_+cC?"?޽ŷy???s??VO@????8=/D?} $?     