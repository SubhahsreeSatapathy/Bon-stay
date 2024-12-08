const Booking = require("../Models/bookingModel")
const Hotel = require("../Models/hotelModel")

 exports.createBooking = async (req,res) => {
    try{
        const { user, hotel, checkInDate, checkOutDate, totalAmount } = req.body;
        const booking = new Booking({
          user,
          hotel,
          checkInDate,
          checkOutDate,
          totalAmount,
        });
        await booking.save();
        res.status(201).json({message: "Booking created successfully", Booking});

    } catch(error){
        res.status(500).json({ message: "Error creating booking", error });
    }
}

exports.getBookingsByUserId = async(req, res) => {
    try {
      const bookings = await Booking.find({ user: req.params.userId }).populate(
        "hotel"
      );
      res.status(200).json(bookings);
    } catch (error) {
      res.status(500).json({ message: "Error finding booking", error });
    }
}
