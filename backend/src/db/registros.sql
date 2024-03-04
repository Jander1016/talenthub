INSERT INTO clients (name, password, email, avatar, is_active)
VALUES 
('Cliente1', 'password1', 'cliente1@example.com', 'https://randomuser.me/api/portraits/men/1.jpg', 1),
('Cliente2', 'password2', 'cliente2@example.com', 'https://randomuser.me/api/portraits/women/2.jpg', 1),
('Cliente3', 'password3', 'cliente3@example.com', 'https://randomuser.me/api/portraits/men/3.jpg', 1),
('Cliente4', 'password4', 'cliente4@example.com', 'https://randomuser.me/api/portraits/women/4.jpg', 1),
('Cliente5', 'password5', 'cliente5@example.com', 'https://randomuser.me/api/portraits/men/5.jpg', 1);

INSERT INTO talents (name_talent, password, email, avatar, is_active, rating)
VALUES 
('Talento1', 'password1', 'talento1@example.com', 'https://randomuser.me/api/portraits/women/6.jpg', 1, 5),
('Talento2', 'password2', 'talento2@example.com', 'https://randomuser.me/api/portraits/men/7.jpg', 1, 4),
('Talento3', 'password3', 'talento3@example.com', 'https://randomuser.me/api/portraits/women/8.jpg', 1, 4),
('Talento4', 'password4', 'talento4@example.com', 'https://randomuser.me/api/portraits/men/9.jpg', 1, 4),
('Talento5', 'password5', 'talento5@example.com', 'https://randomuser.me/api/portraits/women/10.jpg', 1, 5);

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
((SELECT talent_id FROM talents WHERE name_talent = 'Talento1'), (SELECT stack_id FROM stacks WHERE name_stack = 'Node.js')),
((SELECT talent_id FROM talents WHERE name_talent = 'Talento2'), (SELECT stack_id FROM stacks WHERE name_stack = 'React.js')),
((SELECT talent_id FROM talents WHERE name_talent = 'Talento3'), (SELECT stack_id FROM stacks WHERE name_stack = 'Angular.js')),
((SELECT talent_id FROM talents WHERE name_talent = 'Talento4'), (SELECT stack_id FROM stacks WHERE name_stack = 'Vue.js')),
((SELECT talent_id FROM talents WHERE name_talent = 'Talento5'), (SELECT stack_id FROM stacks WHERE name_stack = 'Flutter'));

