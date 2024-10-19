const sidebar = document.getElementById('sidebar');
const mapContainer = document.getElementById('mapContainer');
const toggleButton = document.getElementById('toggleButton');

let isSidebarOpen = false;


function updateToggleButtonPosition() 
{
    const sidebarWidth = isSidebarOpen ? '66.67%' : '33.33%'; // Determine  sidebar size
    const buttonLeftPosition = `calc(${sidebarWidth} - 20px)`; // Calculate button position
    toggleButton.style.left = buttonLeftPosition; 
}

toggleButton.addEventListener('click', () => 
    {
    if (isSidebarOpen) 
        {
        sidebar.style.width = '33.33%'; // Shrink Menu
        mapContainer.style.width = '66.67%'; // Open map
        toggleButton.textContent = '>';
    } 
    else 
    {
        sidebar.style.width = '66.67%'; 
        mapContainer.style.width = '33.33%'; 
        toggleButton.textContent = '<';
    }
    
    isSidebarOpen = !isSidebarOpen; 
    updateToggleButtonPosition(); 
});




