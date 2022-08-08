import { quotes, users } from "./fakedb.js";
import mongoose from 'mongoose'

const User  = mongoose.model("User")
const Quote  = mongoose.model("Quote")
import bcrypt from 'bcryptjs'

const resolvers = {
  Query: {
    // users: () => users,
    users: async() => await User.find({}),
    // user: (_, { _id }) => users.find((user) => user._id == _id),
    // user: async(_id) => await User.findById({_id}),
    // quotes: () => quotes,
    // quote: (_, { by }) => quotes.filter((quote) => quote.by == by),
  },
  User: {
    quotes: (user) => quotes.filter((quotes) => quotes.by == user._id),
  },
  Mutation: {
    signUp: async (_, { userNew }) => {
      const user = await User.findOne({ email: userNew.email });
      if (user) {
        throw new Error("User already exists with that email");
      }
      const hashedPassword = await bcrypt.hash(userNew.password, 12);

      const newUser = new User({
        ...userNew,
        password: hashedPassword,
      });
      return await newUser.save();
    },
  },
};

export default resolvers;
