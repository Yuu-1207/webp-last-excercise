export async function fetchCharacter(breed) {
    const response = await fetch(
      `https://rickandmortyapi.com/api/character/${breed}`
    );
    const data = await response.json();
    return data;
}