module.exports = mongoose => {
    var Schema = mongoose.Schema(
        {
          state: Array,
        },
        { timestamps: true }
      );
    
    const Subscribe = mongoose.model("subscribe", Schema);
    return Subscribe;
  };