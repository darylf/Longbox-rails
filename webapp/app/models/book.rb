class Book < ActiveRecord::Base

  belongs_to :series
  has_many :jobs, inverse_of: :book
  has_many :people, through: :jobs

  accepts_nested_attributes_for :jobs, 
    allow_destroy: true,
    reject_if: proc { |a| a['people_id'].blank? }

  validates_presence_of :issue_number
  validates_presence_of :series_id
  validates_uniqueness_of :issue_number, scope: :series_id

  def self.next_issue(series_id:)
    books = where(series_id: series_id)
    unless books.empty?
      books.maximum(:issue_number).next
    else
      "1"
    end
  end

  def name
    "#{series.name} ##{issue_number}"
  end

  def publisher_name
    "#{series.publisher.name}"
  end
end