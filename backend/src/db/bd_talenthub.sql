CREATE database db_talenthub;

USE db_talenthub;

CREATE TABLE admins (
	admin_id varchar(40) primary key default(uuid()),
    email varchar(100) NOT NULL,
    password varchar(200) NOT NULL
);

CREATE table clients (
    client_id varchar(40) primary key default(uuid()),
    name varchar(20) NOT NULL, 
    password varchar(200) NOT NULL,
    email varchar(100) NOT NULL,
    avatar varchar(200),
    is_active tinyint default 1
);

CREATE table talents (
    talent_id varchar(40) primary key default(uuid()),
    name_talent varchar(20) NOT NULL, 
    password varchar(200) NOT NULL,
    email varchar(100) NOT NULL,
    avatar varchar(200),
    location varchar(25),
    is_active tinyint default 1,
    rating int default 0
);

CREATE TABLE services (
    service_id varchar(40) PRIMARY KEY default(uuid()),
    name_service varchar(40) NOT NULL,
    description varchar(300)
);

create table stacks(
    stack_id varchar(40) primary key default(uuid()),
    name_stack varchar (40) NOT NULL,
    service_id varchar(40),
    foreign key (service_id) references services(service_id)
);

create table talents_stacks(
	talent_id varchar(40),
	stack_id varchar(40),
    primary key(talent_id, stack_id),
    foreign key(talent_id) references talents(talent_id),
    foreign key(stack_id) references stacks(stack_id)
);

create table whishlists(
	whishlist_id varchar(40) primary key default(uuid()),
	client_id varchar(40),
    foreign key(client_id) references clients(client_id)
);

create table detail_whishlist(
	whishlist_id varchar(40),
	talent_id varchar(40),
    isactive tinyint default 1,
    primary key(whishlist_id, talent_id),
    foreign key(talent_id) references talents(talent_id),
    foreign key(whishlist_id) references whishlists(whishlist_id)
);

