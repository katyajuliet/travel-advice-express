const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");
// create our Review model
class Review extends Model {
  static upvote(body, models) {
    return models.Vote.create({
      user_id: body.user_id,
      review_id: body.review_id,
    }).then(() => {
      return Review.findOne({
        where: {
          id: body.review_id,
        },
        attributes: [
          "id",
          "review_text",
          "title",
          "review_file",
          "created_at",
          "review_cat",
          [
            sequelize.literal(
              "(SELECT COUNT(*) FROM vote WHERE review.id = vote.review_id)"
            ),
            "vote_count",
          ],
        ],
        include: [
          {
            model: models.Comment,
            attributes: [
              "id",
              "comment_text",
              "review_id",
              "user_id",
              "created_at",
              "review_file",
            ],
            include: {
              model: models.User,
              attributes: ["username"],
            },
          },
        ],
      });
    });
  }
}

// create fields/columns for Review model
Review.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    review_cat: {
      type: DataTypes.ENUM(
        "Travel",
        "Airline",
        "Hotel",
        "Transportation",
        "Hostel",
        "Food",
        "Nightlife",
        "Community/Culture"
      ),
      allowNull: false,
    },
    review_text: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    review_file: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    user_id: {
      type: DataTypes.INTEGER,
      references: {
        model: "user",
        key: "id",
      },
    },
  },
  {
    sequelize,
    freezeTableName: true,
    underscored: true,
    modelName: "review",
  }
);

module.exports = Review;
