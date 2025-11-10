/*
  # Add size variant products

  1. New Products
    - Класик 55 (55cm width, 55cm mirror height)
    - Класик 65 (65cm width, 70cm mirror height)  
    - Трио 55 (55cm width, 55cm mirror height)
    - Трио 65 (65cm width, 70cm mirror height)
  
  2. Changes
    - Insert 4 new product variants with appropriate dimensions and pricing
    - Each is a complete separate product with its own ID and slug
*/

INSERT INTO products (id, name, category, price, description, features, colors, dimensions, specifications, main_image_url, additional_images, in_stock, is_published, slug, sort_order, created_at, updated_at)
VALUES 
  (
    gen_random_uuid(),
    'Класик 55',
    'Vanities',
    899,
    'Внесете модерен и практичен изглед во вашата бања со овој елегантен ѕиден мебел за бања. Ширина 55cm. Изработен е од висококвалитетен PVC материјал отпорен на влага. Во комплетот добивате: огледало со шкафче, керамички умивалник и шкафче.',
    '["Висококвалитетен PVC материјал", "Отпорен на влага", "Ѕидна монтажа", "Огледало со шкафче", "Керамички умивалник"]'::jsonb,
    '[{"name": "White", "value": "#ffffff"}]'::jsonb,
    '{"width": 55, "height": 55, "depth": 48, "weight": 30}'::jsonb,
    '{"material": "PVC", "finish": "Matte", "handleType": "Standard", "hingeType": "Standard", "mountingType": "Wall-mounted", "mirrorWidth": 55, "mirrorHeight": 55}'::jsonb,
    'https://raw.githubusercontent.com/darkotodorovski/Strana/main/Класик/1.png',
    '["https://raw.githubusercontent.com/darkotodorovski/Strana/main/Класик/2.png", "https://raw.githubusercontent.com/darkotodorovski/Strana/main/Класик/3.png", "https://raw.githubusercontent.com/darkotodorovski/Strana/main/Класик/4.png"]'::jsonb,
    true,
    true,
    'klasik-55',
    2.1,
    now(),
    now()
  ),
  (
    gen_random_uuid(),
    'Класик 65',
    'Vanities',
    999,
    'Внесете модерен и практичен изглед во вашата бања со овој елегантен ѕиден мебел за бања. Ширина 65cm - поголем простор и огледало. Изработен е од висококвалитетен PVC материјал отпорен на влага. Во комплетот добивате: огледало со шкафче, керамички умивалник и шкафче.',
    '["Висококвалитетен PVC материјал", "Отпорен на влага", "Ѕидна монтажа", "Огледало со шкафче", "Керамички умивалник"]'::jsonb,
    '[{"name": "White", "value": "#ffffff"}]'::jsonb,
    '{"width": 65, "height": 55, "depth": 48, "weight": 35}'::jsonb,
    '{"material": "PVC", "finish": "Matte", "handleType": "Standard", "hingeType": "Standard", "mountingType": "Wall-mounted", "mirrorWidth": 70, "mirrorHeight": 60}'::jsonb,
    'https://raw.githubusercontent.com/darkotodorovski/Strana/main/Класик/1.png',
    '["https://raw.githubusercontent.com/darkotodorovski/Strana/main/Класик/2.png", "https://raw.githubusercontent.com/darkotodorovski/Strana/main/Класик/3.png", "https://raw.githubusercontent.com/darkotodorovski/Strana/main/Класик/4.png"]'::jsonb,
    true,
    true,
    'klasik-65',
    2.2,
    now(),
    now()
  ),
  (
    gen_random_uuid(),
    'Трио 55',
    'Vanities',
    949,
    'Моделот Трио е изработен е од квалитетен материјал отпорен на влага. Ширина 55cm. Ѕидната монтажа овозможува современ изглед и полесно чистење. Овој Мебелот за бања е совршено решение за ентериери со модерен стил. Во комплетот добивате: огледало со шкафче, керамички умивалник и шкафче.',
    '["Квалитетен материјал", "Отпорен на влага", "Ѕидна монтажа", "Огледало со шкафче", "Керамички умивалник"]'::jsonb,
    '[{"name": "White", "value": "#ffffff"}]'::jsonb,
    '{"width": 55, "height": 55, "depth": 45, "weight": 30}'::jsonb,
    '{"material": "PVC", "finish": "Matte", "handleType": "Standard", "hingeType": "Standard", "mountingType": "Wall-mounted", "mirrorWidth": 55, "mirrorHeight": 55}'::jsonb,
    'https://raw.githubusercontent.com/darkotodorovski/Strana/main/Трио/3%20ан.png',
    '["https://raw.githubusercontent.com/darkotodorovski/Strana/main/Трио/4%20ан.png", "https://raw.githubusercontent.com/darkotodorovski/Strana/main/Трио/5%20ан.png", "https://raw.githubusercontent.com/darkotodorovski/Strana/main/Трио/6%20ан.png"]'::jsonb,
    true,
    true,
    'trio-55',
    4.1,
    now(),
    now()
  ),
  (
    gen_random_uuid(),
    'Трио 65',
    'Vanities',
    1099,
    'Моделот Трио е изработен е од квалитетен материјал отпорен на влага. Ширина 65cm - поголем простор и огледало. Ѕидната монтажа овозможува современ изглед и полесно чистење. Овој Мебелот за бања е совршено решение за ентериери со модерен стил. Во комплетот добивате: огледало со шкафче, керамички умивалник и шкафче.',
    '["Квалитетен материјал", "Отпорен на влага", "Ѕидна монтажа", "Огледало со шкафче", "Керамички умивалник"]'::jsonb,
    '[{"name": "White", "value": "#ffffff"}]'::jsonb,
    '{"width": 65, "height": 55, "depth": 45, "weight": 35}'::jsonb,
    '{"material": "PVC", "finish": "Matte", "handleType": "Standard", "hingeType": "Standard", "mountingType": "Wall-mounted", "mirrorWidth": 70, "mirrorHeight": 60}'::jsonb,
    'https://raw.githubusercontent.com/darkotodorovski/Strana/main/Трио/3%20ан.png',
    '["https://raw.githubusercontent.com/darkotodorovski/Strana/main/Трио/4%20ан.png", "https://raw.githubusercontent.com/darkotodorovski/Strana/main/Трио/5%20ан.png", "https://raw.githubusercontent.com/darkotodorovski/Strana/main/Трио/6%20ан.png"]'::jsonb,
    true,
    true,
    'trio-65',
    4.2,
    now(),
    now()
  );
