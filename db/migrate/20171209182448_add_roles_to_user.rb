class AddRolesToUser < ActiveRecord::Migration[5.1]
  def change
    add_column :users, :roles, :string
    add_index :users, :roles
  end
end
