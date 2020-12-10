module.exports = mongoose => {
    var Schema = mongoose.Schema(
        {
          title: String,
          src: String,
          favori: Boolean,
        },
        { timestamps: true }
      );
    
    const Subscribe = mongoose.model("subscribe", Schema);
    return Subscribe;
  };