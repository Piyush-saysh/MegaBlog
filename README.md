

1)  {authStatus && ()} agr authstatus true hoga tbhi ye parenthesis wala run krega

2)  {options?.map((option)=>(    // ? agr value hongi options mai to he loop krega wrna nhi 
                    <option key={option} value={option}>
                        {option}
                    </option>
                ))}