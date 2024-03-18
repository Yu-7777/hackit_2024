class Gacha < ApplicationRecord
  belongs_to :user
  def to_json
    {
      userId: user_id,
      title: title,
      money: money,
      count: count,
      probability: probability,
      memo: memo
    }
  end
end
