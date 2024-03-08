INSERT INTO clients (name, password, email, avatar, is_active)
VALUES 
('Cliente1', 'password1', 'cliente1@example.com', 'https://randomuser.me/api/portraits/men/1.jpg', 1),
('Cliente2', 'password2', 'cliente2@example.com', 'https://randomuser.me/api/portraits/women/2.jpg', 1),
('Cliente3', 'password3', 'cliente3@example.com', 'https://randomuser.me/api/portraits/men/3.jpg', 1),
('Cliente4', 'password4', 'cliente4@example.com', 'https://randomuser.me/api/portraits/women/4.jpg', 1),
('Cliente5', 'password5', 'cliente5@example.com', 'https://randomuser.me/api/portraits/men/5.jpg', 1);


INSERT INTO talents (nro_identificacion, name_talent, password, email, avatar, location, personal_page, talent_description, is_active)
VALUES 
('09738923S', 'John Doe', 'password123', 'john.doe@example.com', 'https://randomuser.me/api/portraits/men/7.jpg', 'Madrid', 'https://personalpage.com/johndoe', 'Full-stack Developer', 1),
('8990722G', 'Jane Smith', 'pass456', 'jane.smith@example.com', 'https://randomuser.me/api/portraits/women/6.jpg', 'Madrid', 'https://personalpage.com/janesmith', 'UI/UX Designer', 1),
('X090908Y', 'Bob Johnson', 'secret321', 'bob.johnson@example.com', 'https://randomuser.me/api/portraits/men/4.jpg', 'Málaga', 'https://personalpage.com/bobjohnson', 'Data Scientist', 1),
('Y090908Y', 'Alice Brown', 'pwd789', 'alice.brown@example.com', 'https://randomuser.me/api/portraits/women/8.jpg', 'Sevilla', 'https://personalpage.com/alicebrown', 'Software Engineer', 1),
('1768975B', 'Charlie Green', 'secure987', 'charlie.green@example.com', 'https://randomuser.me/api/portraits/men/9.jpg', 'Valencia', 'https://personalpage.com/charliegreen', 'Frontend Developer', 1);

INSERT INTO services (name_service, description) VALUES 
('Backend Development', 'Desarrollo de aplicaciones en el lado del servidor'),
('Frontend Development', 'Desarrollo de aplicaciones en el lado del cliente'),
('Full Stack Development', 'Desarrollo de aplicaciones tanto en el lado del servidor como en el cliente'),
('Mobile Development', 'Desarrollo de aplicaciones móviles'),
('DevOps', 'Gestión de la integración continua y el despliegue de aplicaciones');

INSERT INTO stacks (name_stack, service_id) VALUES 
('Node.js', (SELECT service_id FROM services WHERE name_service = 'Backend Development')),
('React.js', (SELECT service_id FROM services WHERE name_service = 'Frontend Development')),
('Angular.js', (SELECT service_id FROM services WHERE name_service = 'Frontend Development')),
('Vue.js', (SELECT service_id FROM services WHERE name_service = 'Frontend Development')),
('Flutter', (SELECT service_id FROM services WHERE name_service = 'Mobile Development'));

INSERT INTO talents_stacks (talent_id, stack_id) VALUES 
((SELECT talent_id FROM talents WHERE name_talent = 'John Doe'), (SELECT stack_id FROM stacks WHERE name_stack = 'Node.js')),
((SELECT talent_id FROM talents WHERE name_talent = 'Jane Smith'), (SELECT stack_id FROM stacks WHERE name_stack = 'React.js')),
((SELECT talent_id FROM talents WHERE name_talent = 'Bob Johnson'), (SELECT stack_id FROM stacks WHERE name_stack = 'Angular.js')),
((SELECT talent_id FROM talents WHERE name_talent = 'Alice Brown'), (SELECT stack_id FROM stacks WHERE name_stack = 'Vue.js')),
((SELECT talent_id FROM talents WHERE name_talent = 'Charlie Green'), (SELECT stack_id FROM stacks WHERE name_stack = 'Flutter'));

insert into subscriptions ( description, price) values ('Gratis 7 dias', 0),
('1 mes', 5.99),
('6 meses', 100),
('12 meses', 100);