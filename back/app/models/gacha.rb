class Gacha < ApplicationRecord

  def to_json
    {
      usrId: user_id,
      title: title,
      money: money,
      count: count,
      probability: probability,
      memo: memo
    }
  end
end
