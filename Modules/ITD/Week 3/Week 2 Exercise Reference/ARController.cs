/******************************************************************************
Author: Elyas Chua-Aziz
Name of Class: ARController
Description of Class: Controls which object spawns on user tap by changing the active AnchorStage
Date Created: 31/10/2021
******************************************************************************/
using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using UnityEngine.UI;
using Vuforia;

public class ARController : MonoBehaviour
{
    /// <summary>
    /// The PlaneFinder ContentPositioningBehaviour that will have it's AnchorStage changed.
    /// </summary>
    public ContentPositioningBehaviour groundPositioner;
    /// <summary>
    /// The MidAirPositioner ContentPositioningBehaviour that will have it's AnchorStage changed.
    /// </summary>
    public ContentPositioningBehaviour airPositioner;

    /// <summary>
    /// The array of GroundPlaneStages to change to.
    /// </summary>
    public AnchorBehaviour[] groundAnchorStages = new AnchorBehaviour[0];

    /// <summary>
    /// The array of MidAirStages to change to.
    /// </summary>
    public AnchorBehaviour[] airAnchorStages = new AnchorBehaviour[0];

    /// <summary>
    /// The button to cycle GroundPlaneStages
    /// </summary>
    public GameObject groundCycleButton;

    /// <summary>
    /// The button to cycle MidAirStages
    /// </summary>
    public GameObject airCycleButton;

    /// <summary>
    /// Tracks if the class should cycle GroundPlane or MidAir Stages
    /// </summary>
    bool cycleGroundStages = true;

    /// <summary>
    /// The current ground stage
    /// </summary>
    int curGroundStageIndex = 0;

    /// <summary>
    /// The current air stage
    /// </summary>
    int curAirStageIndex = 0;

    private void Start()
    {
        // Update the buttons at the start just in case.
        UpdateButtonState(); 
        // Update the positioners as well.
        UpdatePositionerState();
    }

    /// <summary>
    /// Updates the state of the positioners depending on cycleGroundStages
    /// </summary>
    private void UpdatePositionerState()
    {
        // Set the ground positioner to be active/inactive depending on state of cycleGroundStages
        groundPositioner.gameObject.SetActive(cycleGroundStages);

        // Set the air positioner to be active/inactive depending on state of cycleGroundStages
        airPositioner.gameObject.SetActive(!cycleGroundStages);
    }

    /// <summary>
    /// Updates the state of the buttons depending on cycleGroundStages
    /// </summary>
    private void UpdateButtonState()
    {
        // Set the ground cycle button to be active/inactive depending on state of cycleGroundStages
        groundCycleButton.SetActive(cycleGroundStages);

        // Set the ground cycle button to be active/inactive depending on state of cycleGroundStages
        airCycleButton.SetActive(!cycleGroundStages);
    }

    /// <summary>
    /// Flip the value of cycleGroundStages
    /// </summary>
    public void SwapStageType()
    {
        // Flip the bool
        cycleGroundStages = !cycleGroundStages;
        // Update the buttons
        UpdateButtonState();
        // Update the positioners
        UpdatePositionerState();
    }

    /// <summary>
    /// Updates the AnchorStage of the contentPositioner to the next stage.
    /// </summary>
    public void CycleStages()
    {
        if (cycleGroundStages)
        {
            // Increase the index of the current stage
            ++curGroundStageIndex;

            // Check if the current stage index exceeds the array length
            if (curGroundStageIndex >= groundAnchorStages.Length)
            {
                // Reset the current stage index.
                curGroundStageIndex = 0;
            }

            // Set the AnchorStage variable to the corresponding array index.
            groundPositioner.AnchorStage = groundAnchorStages[curGroundStageIndex];
        }
        else
        {
            // Increase the index of the current stage
            ++curAirStageIndex;

            // Check if the current stage index exceeds the array length
            if (curAirStageIndex >= airAnchorStages.Length)
            {
                // Reset the current stage index.
                curAirStageIndex = 0;
            }

            // Set the AnchorStage variable to the corresponding array index.
            airPositioner.AnchorStage = airAnchorStages[curAirStageIndex];
        }
    }
}
