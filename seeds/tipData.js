const { Tip } = require('../models');

const tipData = [

    {
        userName: 'Gob Bluth',
        tip: 'Take a moment, breath.',
        votes: 3,
        tip_number: 1,
        user_id: 1,
      },
      {
        userName: 'Gob Bluth',
        tip: 'Smell the flowers.',
        votes: 0,
        tip_number: 2,
        user_id: 1,
      },
      {
        userName: 'Gob Bluth',
        tip: 'You are not your thoughts.',
        votes: 2,
        tip_number: 3,
        user_id: 1,
      },
      {
        userName: 'George Michael Bluth',
        tip: 'Be kind to yourself.',
        votes: 7,
        tip_number: 4,
        user_id: 2,
      },
      {
        userName: 'George Michael Bluth',
        tip: 'Manually turn notifications off for chunks of time in order to reconnect with your world.',
        votes: 0,
        tip_number: 5,
        user_id: 2,
      },
      {
        userName: 'George Michael Bluth',
        tip: 'Wait 3 seconds before unlocking your smartphone just to notice what thoughts, feelings, and sensations arise as you pick up your device.',
        votes: 1,
        tip_number: 6,
        user_id: 2,
      },
      {
        userName: 'Walter White',
        tip: 'Take frequent breaks, even if they are brief, just to reset.',
        votes: 3,
        tip_number: 7,
        user_id: 3,
      },
      {
        userName: 'Walter White',
        tip: 'Practice mindful listening when conversing with friends, colleagues, and family. You may be surprised about what you learn.',
        votes: 2,
        tip_number: 8,
        user_id: 3,
      },
      {
        userName: 'Walter White',
        tip: 'Practice mindfully "checking in". It is as simple as turning inward, for just a moment, to notice what is going on within you: what thoughts, feelings, and sensations you are feeling',
        votes: 4,
        tip_number: 9,
        user_id: 3,
      },
      {
        userName: 'Tyrion Lannister',
        tip: 'Make eye contact with people without judgement and notice how much more you feel connected to the people around you.',
        votes: 8,
        tip_number: 10,
        user_id: 4,
      },
      {
        userName: 'Tyrion Lannister',
        tip: 'Notice mental activity. Awareness makes it easy to gain perspective on your thoughts.',
        votes: 5,
        tip_number: 11,
        user_id: 4,
      },
      {
        userName: 'Tyrion Lannister',
        tip: 'Place your focus on an object that is not yourself and bring your mind back to it each time you notice that it has wandered.',
        votes: 7,
        tip_number: 12,
        user_id: 4,
      },
      {
        userName: 'Fox Mulder',
        tip: 'Do a body scan, listening to the tensions in your body, focusing on them, and then releasing them',
        votes: 5,
        tip_number: 13,
        user_id: 5,
      },
      {
        userName: 'Fox Mulder',
        tip: 'Try walking with intention. If you are carefully focused on and aware of each step you take, you will begin to feel that quiet sense of peace that instils you when you practice mindfulness.',
        votes: 2,
        tip_number: 14,
        user_id: 5,
      },
      {
        userName: 'Fox Mulder',
        tip: 'Try a new activity while being mindful. It could be anything: drawing, housework, or brushing your hair.',
        votes: 9,
        tip_number: 15,
        user_id: 5,
      },
      {
        userName: 'Fox Mulder',
        tip: 'Get back to nature. Take your shoes off and feel the earth under your feet, if weather permits.',
        votes: 6,
        tip_number: 16,
        user_id: 5,
      },
      {
        userName: 'Bruce Campbell',
        tip: 'Even behind a computer, it is easy to be mindful. Focus on breathing for a minute or become conscious of your body.',
        votes: 4,
        tip_number: 17,
        user_id: 6,
      },
      {
        userName: 'Bruce Campbell',
        tip: 'When you are in the shower, notice if your mind is skipping ahead to work and the day ahead. If it is, try to bring it back to the present moment. ',
        votes: 10,
        tip_number: 18,
        user_id: 6,
      },
      {
        userName: 'Bruce Campbell',
        tip: 'Listen to music. This might sound too good to be true but if we mindfully listen to music, we achieve a present awareness.',
        votes: 8,
        tip_number: 19,
        user_id: 6,
      },
      {
        userName: 'Bruce Campbell',
        tip: 'Expand your knowledge. A great way to keep your interest and education in mindfulness going is by reading about it. ',
        votes: 2,
        tip_number: 20,
        user_id: 6,
      },
];

const seedTips = () => Tip.bulkCreate(tipData);

module.exports = seedTips;