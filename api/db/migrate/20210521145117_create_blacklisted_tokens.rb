class CreateBlacklistedTokens < ActiveRecord::Migration[6.1]
  def change
    create_table :blacklisted_tokens do |t|
      t.string :jti
      t.belongs_to :user, null: false, foreign_key: true
      t.datetime :exp

      t.timestamps
    end
    add_index :blacklisted_tokens, :jti, unique: true
  end
end
