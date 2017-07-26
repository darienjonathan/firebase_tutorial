require 'firebase'

class FirebaseTest
  def init
    Firebase::Client.new(ENV['FIREBASE_URL'], ENV['FIREBASE_KEY']);
  end
end
