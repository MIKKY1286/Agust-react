import { Button } from "./Button";

export const Card =()=>{
    
    const cardStyle = {
        border: '1px solid #ccc',
        borderRadius: '4px',
        fontFamily: 'Arial, sans-serif',
        padding: '16px',
        margin: '16px',
        boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
    }

    return (
        <>
        <div className="card" style={cardStyle}>
            <h2>Card Title</h2>
            <p>This is a card component.</p>
            <Button />
        </div>
        <div>
            
        </div>
        </>
    );
}