using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class SimpleJson : MonoBehaviour
{
    // Start is called before the first frame update
    void Start()
    {

        Debug.Log("SimpleJson started");

        Player player = new Player();
        player.position = new Vector3(5, 0, 1);
        player.health = 80;
        player.weapons = new string[] { "Shotgun", "Debalizer" };

        //converting data from an object to a string
        string json = JsonUtility.ToJson(player);
        Debug.Log(json);

        //parsing back json string to object
        Player loadedPlayer = JsonUtility.FromJson<Player>(json);
        Debug.LogFormat("\nPlayer Data: Position {0} // Health {1} ",
            loadedPlayer.position, loadedPlayer.health, loadedPlayer.weapons);

    }

    private class Player
    {
        public Vector3 position;
        public int health;
        public string[] weapons;
    }
}
