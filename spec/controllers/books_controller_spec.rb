require 'rails_helper'

describe BooksController do

  let!(:book) { FactoryGirl.create :book }
  let!(:series) { FactoryGirl.create :series }
  let(:valid_attributes) { FactoryGirl.attributes_for(:book, series_id: series.id) }
  let(:invalid_attributes) { FactoryGirl.attributes_for(:book, issue_number: '') }

  describe "GET index" do
    it "assigns all books as @books" do
      get :index
      expect(assigns(:books)).to eq([book])
    end
  end

  describe "GET show" do
    it "assigns the requested book as @book" do
      get :show, id: book.to_param
      expect(assigns(:book)).to eq(book)
    end
  end

  describe "GET new" do
    it "assigns a new book @books" do
      get :new
      expect(assigns(:book)).to be_a_new(Book)
    end

    it 'prepopulates series_id when params[:series_id]' do
      get :new, :series_id => 1
      expect(assigns(:book).series_id).to eq(1)
    end

    it 'prepopulates issue_number when params[:next_issue]' do
      get :new, :next_issue => 1
      expect(assigns(:book).issue_number).to eq("1")
    end
  end

  describe "POST create" do

    describe "with valid params" do
      it "creates a new Book" do
        expect {
          post :create, {book: valid_attributes}
        }.to change(Book, :count).by(1)
      end

      it "assigns a newly created book as @book" do
        post :create, {:book => valid_attributes}
        expect(assigns(:book)).to be_a(Book)
        expect(assigns(:book)).to be_persisted
      end

      it "redirects to the created book if no redirect_to is passed" do
        post :create, {book: valid_attributes}
        expect(response).to redirect_to(Book.last)
      end

      it "redirects to the series when passed redirect_to_series params" do
        post :create, {book: valid_attributes, redirect_to_series: true}
        expect(response).to redirect_to(series)
      end
    end

    describe "with invalid params" do
      it "re-renders the 'new' template" do
        post :create, {book: invalid_attributes }
        expect(response).to render_template("new")
      end
    end

  end

  describe "GET edit" do
    it "assigns the requested book as @book" do
      get :edit, id: book.to_param
      expect(assigns(:book)).to eq(book)
    end
  end

  describe 'POST update' do
    describe 'with valid params' do
      it 'redirects to the existing Book' do
        post :update, { id: book.to_param, book: { issue_number: '100' } }
        expect(response).to redirect_to(book)
      end

      it 'updates existing book' do
        post :update, { id: book.to_param, book: { issue_number: '100' } }
        book.reload
        expect(book.issue_number).to eq('100')
      end
    end

    describe 'with invalid params' do
      it 're-renders the `edit` template' do
        post :update, { id: book.to_param, book: { issue_number: '' } }
        expect(response).to render_template('edit')
      end
    end
  end

  describe "DELETE destroy" do
    before(:each) do
      @book1 = FactoryGirl.create(:book)
    end

    it "destroys a book" do
      expect {
          delete :destroy, :id => @book1.id
        }.to change(Book, :count).by(-1)
    end

    it "destroys the requested book" do
      delete :destroy, :id => @book1.id
      expect { Book.find(@book1.id) }.to raise_exception(ActiveRecord::RecordNotFound)
    end

    it "redirects to the books list" do
      delete :destroy, :id => @book1.id
      expect(response).to redirect_to(books_path)
    end
  end

  describe "GET edit_multiple" do
    it "assigns requested books as @books" do
      get :edit_multiple, book_ids: [book.to_param]
      expect(assigns(:books)).to eq([book])
    end

    it "assigns distrinct jobs from the provided books as @jobs" do
      jobs = FactoryGirl.create(:job, book_id: book.id)

      get :edit_multiple, book_ids: [book.to_param]

      selected_jobs = Job.select(:person_id, :role).distinct.includes(:person).where(book_id: [book.to_param])
      selected_jobs << Job.new
      
      expect(assigns(:jobs)).to eq(selected_jobs)
    end
  end

  describe "POST update_multiple" do
    it "update jobs for book" do
      book1 = FactoryGirl.create :book
      person = FactoryGirl.create :person
      job1 = FactoryGirl.create(:job, book_id: book1.id)

      post :update_multiple, book_ids: [book1.to_param], jobs: [{person_id: person.id, role: job1.role}]

      expect(book1.jobs.find_by_person_id(person.id).role).to eq(job1.role)
    end

    it "delete job for book when _destroy is true" do
      book1 = FactoryGirl.create :book
      person = FactoryGirl.create :person
      job1 = FactoryGirl.create(:job, book_id: book1.id)

      post :update_multiple, book_ids: [book1.to_param], jobs: [{person_id: person.id, role: job1.role, _destroy: true}]

      expect(book1.jobs.find_by_person_id(person.id)).to be_nil
    end

  end

end