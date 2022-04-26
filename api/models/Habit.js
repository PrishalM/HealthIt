const db = require('../dbConfig/init');

class Habit{
     constructor(data){
        this.habit_id = data.habit_id;
        this.user_id = data.user_id;
        this.habit_name = data.habit_name;
        this.frequency = data.frequency;
        this.frequency_count = data.frequency_count;
    };

     // get all habits
     static get all(){
        return new Promise (async (resolve, reject) => {
            try {
                let habitData = await db.query(`SELECT * FROM habits;`);
                let habits = habitData.rows.map((b) => new habit(b));
                resolve (habits);
            } catch (err) {
                reject(`Habit not found, error: ${err}`);
            }
        });
    };

        // find habit by habit id and return it
      static findByHabitId(id){
        return new Promise (async (resolve, reject) => {
            try {
                let habitData = await db.query(`SELECT * 
                                                    FROM habits
                                                    WHERE habits.habit_id = $1;`, [ id ]);                                                  
                let habit = new habit(habitData.rows[0]);
                resolve (habit);
            } catch (err) {
                reject(`Habit not found, error: ${err}`);
            }
        });
    };

    // find habits based on user id
    static HabitsByUserId(user_id){
        return new Promise (async (resolve, reject) => {
            try {
                let habitDataByUser = await db.query(`SELECT *
                                                        FROM habits
                                                        WHERE user_id = $1`, [ user_id ]);
                                                  
                let habits = habitDataByUser.rows.map(r=> new habit(r));
                resolve (habits);
            } catch (err) {
                reject(`Habit not found for that user, error: ${err}`);
            }
        });
    };
 
    static async create(habitData){
        return new Promise (async (resolve, reject) => {
            try {
                
                const {habit_id, user_id, habit_name, frequency, frequency_count} = habitData;

                let result = await db.query(`INSERT INTO habits (habit_id, user_id, habit_name, frequency, frequency_count) VALUES($1, $2, $3, $4, $5,) RETURNING *;`, [habit_id, user_id, habit_name, frequency, frequency_count]);       
                let newHabit = new Habit(result.rows[0]);
                console.log(newHabit);
                resolve (newHabit);
            } catch (err) {
                reject(`Habit could not be created, error: ${err}`);
            }
        });
    };

    destroy(){
        return new Promise(async(resolve, reject) => {
            try {
                await db.query('DELETE FROM habits WHERE habit_id = $1;',
                [ this.habit_id ]);                
                resolve('Habit has been deleted')
            } catch (err) {
                reject(`Habit could not be deleted, error: ${err}`)
            }
        })
    };
};


module.exports = Habit;