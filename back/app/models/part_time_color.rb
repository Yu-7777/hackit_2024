class PartTimeColor < ApplicationRecord
  has_many :part_times, dependent: :destroy

  def to_json
    {
      userId: user_id,
      title: title,
      money: money,
      count: count,
      memo: memo
    }
  end
end
