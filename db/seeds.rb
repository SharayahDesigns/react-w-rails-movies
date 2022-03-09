# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: "Star Wars" }, { name: "Lord of the Rings" }])
#   Character.create(name: "Luke", movie: movies.first)

Movie.destroy_all

Movie.create(title:'Lord of the Rings', stars:5, text:'google', director:'Peter Jackson', genre: 'Fantasy')
Movie.create(title:'The Silence of the Lambs', stars:4.5, text:'google', director:'Jonathan Demme', genre:'Drama, Thriller')
Movie.create(title:'The Wedding Singer', stars:3, text:'google', director:'Frank Coraci', genre: 'Comedy')

Movie.create(title:'The Conjuring', stars:3.9, text:'google', director:'James Wan', genre: 'Horror')
Movie.create(title:'Old', stars:4, text:'google', director:'M. Night Shyamalan', genre: 'Thriller')

puts"seeded facts size: #{Movie.all.size}"


