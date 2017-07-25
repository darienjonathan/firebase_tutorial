require 'firebase'

class FirebaseTest
  def init
    Firebase::Client.new("https://kayac-tech-blog.firebaseio.com/", ENV['FIREBASE_KEY']);
  end
end
