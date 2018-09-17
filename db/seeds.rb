25.times do
  Menu.create(
    menu_items: Faker::Food.dish,
    price: Faker::Commerce.price.to_f
  )
end