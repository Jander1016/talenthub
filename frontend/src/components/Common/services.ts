

const API = "http://localhost:3001/talents";

const cardTalent = {
  getTalents: async () => {
    let response = await fetch(API);
    let talents = await response.json();
    return talents;
  },

  getTalentById: async (talent_id) => {
    let response = await fetch(`${API}/${talent_id}`);
    console.log({ talent_id, api: `${API}/${talent_id}`, response });
    let talent = await response.json();
    return talent;
  },
};

export default cardTalent;

  