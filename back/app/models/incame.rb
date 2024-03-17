class Incame < ApplicationRecord
    def to_json
        {
            yearly: yearly_incame,
            monthly: monthly_incame
        }
    end
end
