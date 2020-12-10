module.exports = mongoose => {
    var Schema = mongoose.Schema(
        {
          id: String,
          title: String,
          src: String,
          favori: Boolean,
        },
        { timestamps: true }
      );
    
    const Subscribe = mongoose.model("subscribe", Schema);
    return Subscribe;
  };