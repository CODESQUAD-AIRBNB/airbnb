    drop table if exists amenity CASCADE;
    drop table if exists booking CASCADE;
    drop table if exists discount_tax CASCADE;
    drop table if exists member CASCADE;
    drop table if exists room CASCADE;
    drop table if exists room_amenity CASCADE;
    drop table if exists room_discount_tax CASCADE;
    drop sequence if exists hibernate_sequence;

    create table amenity (
        amenity_id bigint generated by default as identity,
        name varchar(80),
        primary key (amenity_id)
    );

    create table booking (
        booking_id bigint generated by default as identity,
        check_in date,
        check_out date,
        adults integer,
        children integer,
        infants integer,
        total_price integer,
        member_id bigint,
        room_id bigint,
        created_at timestamp,
        primary key (booking_id)
    );

    create table discount_tax (
        discount_tax_id bigint generated by default as identity,
        name varchar(20),
        rate integer,
        primary key (discount_tax_id)
    );

    create table member (
        member_id bigint generated by default as identity,
        name varchar(20),
        created_at timestamp,
        primary key (member_id)
    );

    create table room (
        room_id bigint generated by default as identity,
        bathroom double,
        bed double,
        bedroom double,
        image varchar(1000),
        address varchar(60),
        latitude double not null,
        longitude double not null,
        max_number_of_guest integer,
        name varchar(80),
        price_per_night integer,
        primary key (room_id)
    );

    create table room_amenity (
        room_amenity_id bigint generated by default as identity,
        amenity_id bigint,
        room_id bigint,
        primary key (room_amenity_id)
    );

    create table room_discount_tax (
        room_discount_tax_id bigint generated by default as identity,
        discount_tax_id bigint,
        room_id bigint,
        primary key (room_discount_tax_id)
    );

    alter table booking
       add constraint fk_booking_member_id
       foreign key (member_id)
       references member;

    alter table booking
       add constraint fk_booking_room_id
       foreign key (room_id)
       references room;

    alter table room_amenity
       add constraint fk_room_amenity_amenity_id
       foreign key (amenity_id)
       references amenity;

    alter table room_amenity
       add constraint fk_room_amenity_room_id
       foreign key (room_id)
       references room;

    alter table room_discount_tax
       add constraint fk_room_discount_tax_discount_tax_id
       foreign key (discount_tax_id)
       references discount_tax;

    alter table room_discount_tax
       add constraint fk_room_discount_tax_room_id
       foreign key (room_id)
       references room;
