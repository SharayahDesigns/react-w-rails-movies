class Movie < ApplicationRecord
validates_inclusion_of :stars, :in => 0..5
validates :stars, numericality:true
has_many :images
end
